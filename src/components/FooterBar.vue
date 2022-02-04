<template>
  <footer class=" flex items-center justify-center z-30 bottom-0 w-full h-14 px-4 bg-red-600">
    <a class="flex  justify-center items-center cubic" href="https://github.com/javarcast">
      <img class="h-10" src="@/assets/img/varcast.png" alt="varcast">
      <h2 class="text-white ml-2 shadow-lg">Varcast</h2>
    </a>
  </footer>
</template>
<script>
export default {
  name: 'FooterBar',
};
</script>
<style scoped>
  .cubic {
    font-family: "cubic", serif;
    letter-spacing: 10px;
  }

</style>
