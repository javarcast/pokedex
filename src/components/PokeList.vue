<template>
  <load-layout v-if="isLoading">
    <loading-spinner></loading-spinner>
  </load-layout>
  <template v-else>
    <div class="top">
    </div>
    <div class="midle w-full flex flex-wrap">
      <poke-card v-for="pokemon in pokemons" :pokemon="pokemon" :key="pokemon.name"></poke-card>
    </div>
    <div id="scroll-trigger" class="h-40 flex flex-wrap justify-center" ref="infinitescrolltrigger">
        <loading-spinner></loading-spinner>
    </div>
  </template>
</template>
<script>
import { mapGetters } from 'vuex';
import getResource from '@/api/pokeget';
import PokeCard from '@/components/PokeCard.vue';
import LoadLayout from '@/layouts/LoadLayout.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default {
  name: 'PokeList',
  components: {
    PokeCard,
    LoadLayout,
    LoadingSpinner,
  },
  computed: {
    ...mapGetters(['pokemons', 'nextUrl', 'currentUrl', 'isLoading']),
  },
  methods: {
    getPokemon() {
      const url = (this.currentUrl) ? `pokemon?${this.currentUrl.split('?').pop()}` : 'pokemon';
      getResource(url)
        .then((resp) => {
          if (!localStorage.nextUrl || localStorage.nextUrl === '') {
            localStorage.nextUrl = resp.next;
          }
          this.$store.dispatch('UPDATE_ITEM', {
            name: 'nextUrl',
            value: resp.next,
          });
          if (this.pokemons) {
            resp.results.forEach((pokemon) => {
              const pokemonId = pokemon.url.split('/').filter((value) => value).pop();
              this.$store.dispatch('ADD_POKEMON',
                {
                  name: pokemon.name,
                  id: pokemonId,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
                });
            });
          }
        })
        .catch((error) => console.error(error))
        .finally(() => {
          this.$store.dispatch('UPDATE_ITEM', { name: 'isLoading', value: false });
        });
    },
    scrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next();
          }
        });
      });

      observer.observe(this.$refs.infinitescrolltrigger);
    },
    next() {
      this.$store.dispatch('UPDATE_ITEM', {
        name: 'currentUrl',
        value: this.nextUrl,
      });
      this.getPokemon();
    },
  },
  created() {
    if (localStorage.pokemons === 'undefined' || !localStorage.pokemons || localStorage.pokemons === []) {
      this.getPokemon();
    } else {
      this.$store.dispatch('UPDATE_ITEM', {
        name: 'pokemons',
        value: JSON.parse(localStorage.pokemons),
      });
      this.$store.dispatch('UPDATE_ITEM', {
        name: 'nextUrl',
        value: localStorage.nextUrl,
      });
      this.$store.dispatch('UPDATE_ITEM', { name: 'isLoading', value: false });
    }
  },
  mounted() {
    this.scrollTrigger();
  },
};
</script>
