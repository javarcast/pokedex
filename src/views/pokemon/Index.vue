<template>
 <load-layout v-if="isLoading">
    <loading-spinner></loading-spinner>
  </load-layout>
  <div class="py-20 flex justify-center" v-else>
    <section class="flex flex-wrap w-full mx-40 justify-evenly  text-left
     shadow-lg rounded-lg bg-gray-600 shadow-white
        border-2 pb-10">
        <h1 class="text-white uppercase w-full my-4 text-4xl text-center">{{ pokemon.name }}</h1>
      <div class="w-2/5">
        <div class="w-full flex justify-center items-center flex-wrap flex-col">
          <img class="h-40" :src="currentImage" alt="">
           <carousel-vue v-on:changeImage="setImage" :images="pokemonImage"></carousel-vue>
        </div>
        <div class="flex flex-wrap justify-center mt-2">
          <type-pokemon :types="pokemon.types"></type-pokemon>
        </div>
        <div class="text-center justify-around items-end mt-4">
          <p class="text-white">Height: {{pokemon.height/10}} m</p>
          <p class="text-white">Weight: {{pokemon.weight/10}} Kg</p>
        </div>
      </div>
      <div>
         <h2 class="text-2xl text-white">Stats</h2>
        <div class="">
          <stat-bar v-for="(stat, index) in pokemon.stats" :key="index"
            :name="stat.stat.name" :base="stat.base_stat" :color="colorStats[index]"></stat-bar>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import getResource from '@/api/pokeget';
import LoadLayout from '@/layouts/LoadLayout.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import TypePokemon from '@/views/pokemon/TypePokemon.vue';
import StatBar from '@/views/pokemon/StatBar.vue';
import CarouselVue from '@/components/CarouselVue.vue';

export default {
  name: 'PokemonDetail',
  components: {
    LoadLayout,
    LoadingSpinner,
    TypePokemon,
    StatBar,
    CarouselVue,
  },
  data() {
    return {
      id: this.$route.params.id,
      currentImg: 0,
      pokemon: {},
      pokemonImage: {},
      currentImage: '',
      colorStats: ['#F8041E', '#2AFE00', '#0070FE', '#00EFFE', '#FA5B6C', '#D5E116'],
    };
  },
  methods: {
    getPokemonData() {
      this.$store.dispatch('UPDATE_ITEM', { name: 'isLoading', value: true });
      getResource('pokemon', this.id)
        .then((data) => {
          this.pokemon = data;
          this.currentImage = data.sprites.other.dream_world.front_default;
          const pokeImg = Object.entries(this.pokemon.sprites)
            .filter((item) => (item[1] !== null && typeof (item[1]) !== 'object'))
            .map((item) => item[1]);
          this.pokemonImage = pokeImg;
          this.pokemonImage.push(this.currentImage);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$store.dispatch('UPDATE_ITEM', { name: 'isLoading', value: false });
        });
    },
    setImage(image) {
      this.currentImage = image;
    },
    getIdUrl(url) {
      return url.split('/').filter((item) => item !== '').pop();
    },
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
  created() {
    this.getPokemonData();
  },
  computed: {
    ...mapGetters(['isLoading']),
    getImages() {
      let prev = 0;
      let next = 0;
      prev += 1;
      next += 1;
      return prev + next;
    },
  },
};
</script>
