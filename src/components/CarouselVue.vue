<template>
  <div class="relative w-full flex justify-center flex-wrap mt-2">
    <div class="dots flex justify-between w-3/4 absolute">
      <button class="bg-white w-8 h-8 font-black shadow rounded-full left-0" @click="prev">
      &#60;
      </button>
      <button class="bg-white w-8 h-8 font-black shadow rounded-full " @click="next">
        &#62;
      </button>
    </div>
  <div class="carousel z-10">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        <img class="h-14" @click="changeImage(card)" :src="card" alt="">
      </div>
    </div>
  </div>

  </div>
</template>

<script>
export default {
  emit: ['changeImage'],

  data() {
    return {
      cards: [],
      innerStyles: {},
      step: '',
      transitioning: false,
    };
  },
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.cards = this.images;
    this.setStep();
    this.resetTranslate();
  },
  methods: {
    changeImage(img) {
      this.$emit('changeImage', img);
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth;
      const totalCards = this.cards.length;
      this.step = `${innerWidth / totalCards}px`;
    },
    next() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveLeft();
      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    prev() {
      if (this.transitioning) return;
      this.transitioning = true;
      this.moveRight();
      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });
    },
    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`,
      };
    },
    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`,
      };
    },
    afterTransition(callback) {
      const listener = () => {
        callback();
        this.$refs.inner.removeEventListener('transitionend', listener);
      };
      this.$refs.inner.addEventListener('transitionend', listener);
    },
    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`,
      };
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 170px;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;
  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}
/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>
