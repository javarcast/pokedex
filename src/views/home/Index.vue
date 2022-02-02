<template>
  <div class="home">
  <title>PokeDex - VueJS</title>
    <poke-list></poke-list>
  </div>
</template>

<script>
import PokeList from '@/components/PokeList.vue';

export default {
  name: 'Home',
  components: {
    PokeList,
  },
  methods: {
    init() {
      this.$store.dispatch('UPDATE_ITEM', { name: 'isLoading', value: 'true' });
    },
  },
  created() {
    this.init();
  },

};
</script>
