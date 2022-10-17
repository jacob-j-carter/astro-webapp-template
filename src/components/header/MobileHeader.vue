<template>
  <div class="lg:hidden w-full">

    <section class="flex justify-between items-center w-full p-2 mx-auto absolute z-10">

      <div class="w-16 h-16 bg-stone-500 rounded-xl p-2">
        <a href="/">
          <img src="/favicon.svg" alt="logo">
        </a>
      </div>

      <div class="w-16 h-16 bg-stone-500 rounded-xl p-2">
        <img src="/assets/images/icons/burgermenu.svg" alt="logo" class="w-full">
      </div>

    </section>

    <BurgerMenu client:load />


  </div>
</template>


<script lang="ts">
import BurgerMenu from './BurgerMenu.vue';

export default {
    name: "MobileHeader",
    components: { BurgerMenu }
}

</script>


<style scoped lang="scss">
  @use '../../sass/abstracts' as *;
  @use '../../sass/themes' as *;



</style>