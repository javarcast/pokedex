<template>
  <div class=" w-full bg-grey-light mt-2">
    <span class="text-white uppercase">{{ name }}</span>
    <div class="text-xs leading-none py-1 text-center text-white rounded-lg"
      :style="{ width: (base*2)+'px', background: color}">{{ base }}</div>
  </div>
</template>
<script>
export default {
  name: 'StatBar',
  props: {
    name: String,
    base: Number,
    color: String,
  },
};
</script>
