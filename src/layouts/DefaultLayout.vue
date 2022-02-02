<template>
  <header-bar></header-bar>
  <main class="h-auto bg-black-300">
    <router-view  v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <footer-bar></footer-bar>
</template>
<script>
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    HeaderBar,
    FooterBar,
  },

};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.route-enter-active,
.route-leave-active {
  transition: all 0.5s ease;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
main {
  min-height: 85.8%;
}
</style>
