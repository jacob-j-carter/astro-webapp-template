<template>
  <div class="lg:hidden ">

    <BurgerMenu />
    

  </div>
</template>


<script lang="ts">
import BurgerMenu from "../components/BurgerMenu.vue";
import { Icon } from 'astro-icon';

export default {
    name: "Placeholder",
    components: { BurgerMenu, Icon }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;



</style>