<template>
  <div class="w-full flex justify-center">
    <img class="h-24 rotate" src="@/assets/img/spinner.png" alt="pokeball spinner">
  </div>
  <h5 class="mt-5 text-xl text-white">LOADING...</h5>
</template>
<script>
export default {
  name: 'LoadingSpinner',
};
</script>
<style scoped>
.rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg) translateY(0px);
  }
  to {
    transform: rotate(359deg) translateY(5px);
  }
}
</style>
