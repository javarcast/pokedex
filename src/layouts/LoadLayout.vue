<template>
  <div class="container mx-auto">
    <div class="flex justify-center">

      <div
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
      >
      <div>
        <slot></slot>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadLayout',
};
</script>
<style scoped>
 .container{
   min-height: 100vh;
 }
</style>
