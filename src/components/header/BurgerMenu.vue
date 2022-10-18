<template>
  <div :class="[navHidden ? '' : 'overlay-on']" >
    <nav
      class="bg-stone-600 w-2/3 right-0 flex flex-col items-center justify-center fixed z-30"
      :class="[navHidden ? 'nav-hidden' : '']"
    >
      <div @click="$emit('close-nav')">
        <img
          src="/assets/images/icons/close.svg"
          alt="close menu button"
          class="absolute right-4 top-4 w-8 h-8"
        />
      </div>

      <div :key="page.pageName" v-for="page in pages" class="my-4">
        <a :href="page.pageHREF">
          <h3 class="uppercase text-white">
            {{ page.pageName }}
          </h3>
        </a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import pageData from "../../data/pageData.json";
import Button from "../Button.vue";

export default {
  name: "BurgerMenu",
  components: {
    Button
},
  props: {
    pageArrNumber: {
      type: Number,
      default: 0,
    },
    navHidden: {
      type: Boolean
    }
  },
  data () {
    return {
      pages: pageData,
    };
  },
  methods: {

  },
  created() {
    
  },
};
</script>

<style scoped lang="scss">
  @use '../../sass/abstracts' as *;
  @use '../../sass/themes' as *;

  nav {
    height: 100vh;
  }

  .nav-hidden {
    translate: 100% 0;
  }

  .overlay-on::after {
    content:"";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: black;
    opacity: .75;
  }

</style>
