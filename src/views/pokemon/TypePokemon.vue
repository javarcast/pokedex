<template>
  <div class="flex rounded-lg w-full justify-center">
    <p :class="`bg-${type.type.name} mx-2  rounded-xl
      border-2 px-2 text-white capitalize`"
      v-for="type in types" :key="type">
      {{ type.type.name }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'TypePokemon',
  props: {
    types: {
      type: Array,
      required: true,
    },
  },
};
</script>
