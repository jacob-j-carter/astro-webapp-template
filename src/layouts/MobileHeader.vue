<template>
  <div class="lg:hidden ">

    <BurgerMenu />

  </div>
</template>


<script lang="ts">
import { Icon } from 'astro-icon';
import BurgerMenu from '../components/BurgerMenu.vue';

export default {
    name: "MobileHeader",
    components: { Icon, BurgerMenu }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;



</style>