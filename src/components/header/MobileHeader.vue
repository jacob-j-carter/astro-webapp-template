<template>
  <div class="lg:hidden w-full">

    <MobileButtons @toggle-menu="toggleMenu()" />

    <BurgerMenu :navHiddenProp="navHiddenProp" client:load />


  </div>
</template>


<script lang="ts">
import BurgerMenu from './BurgerMenu.vue';
import MobileButtons from './MobileButtons.vue';

export default {
    name: "MobileHeader",
    components: { BurgerMenu, MobileButtons },
    data () {
      return {
        navHiddenProp: true
      }
    },
    methods: {
      toggleMenu() {
        this.navHiddenProp = !this.navHiddenProp
      }
    },

}

</script>


<style scoped lang="scss">
  @use '../../sass/abstracts' as *;
  @use '../../sass/themes' as *;



</style>