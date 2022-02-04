<template>
  <div @click="goToPokemon" class="card w-full sm:w-1/3 md:w-1/4 my-4  flex cursor-pointer
   flex-col justify-center items-center relative">
    <div class="poketop  shadow-xl border-black-300
     h-28 bg-red-700 w-56 rounded-t-full border-8"></div>
    <div class="absolute z-10  w-full h-full flex justify-center items-center">
      <div class="bg-white absolute pokebuttom w-10 h-10 shadow-xl
      border-8 border-black-300 rounded-full"></div>
      <img class="pokeimage rounded-full w-1/2 h-1/2" :src="pokemon.image" alt="">
    </div>
    <div class="pokebottom border-8 flex flex-col justify-center items-center border-black-300
     h-28 bg-white shadow-xl w-56 rounded-b-full">
      <p class="text-xs text-gray-400">{{pokemon.name}}</p>
      <p class="text-xs text-gray-400">#{{pokemon.id}}</p>
     </div>
  </div>
</template>
<script>
export default {
  name: 'PokeCard',
  props: {
    pokemon: Object,
  },
  methods: {
    goToPokemon() {
      this.$router.push({ name: 'Pokemon', params: { id: this.pokemon.id } });
    },
  },
};
</script>
<style scoped>
  .poketop, .pokebottom, .pokebuttom {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: all .5s ease;
    animation: .2s ease-in;
  }
  .card:hover > .poketop  {
    transform:  perspective(1000px) translateY(-30px);
  }
  .card:hover > .pokebottom{
    transform:  perspective(1000px) translateY(30px);
  }
  .card:hover .pokebuttom{
    visibility: hidden;
    height: 0;
    width: 0;
    border: 0px;
  }
  .card .pokeimage{
    transition: all 1s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .card:hover .pokeimage{
    opacity: 1;
    height: 10rem;
    -webkit-box-shadow: inset 0px 0px 50px 30px rgba(0,0,0,0.69);
    box-shadow: inset 0px 0px 50px 30px rgba(0,0,0,0.69);
  }

</style>
