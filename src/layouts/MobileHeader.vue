<template>
  <div class="lg:hidden ">

    <BurgerMenu client:load />

  </div>
</template>


<script lang="ts">
import BurgerMenu from '../components/BurgerMenu.vue';

export default {
    name: "MobileHeader",
    components: { BurgerMenu }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;



</style>