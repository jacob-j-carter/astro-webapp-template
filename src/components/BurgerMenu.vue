<template>
  <nav class="lg:hidden bg-slate-900 text-white" :class="[isHidden ? 'nav-hidden' : 'nav-visible']">

  </nav>
</template>


<script lang="ts">

export default {
  name: 'BurgerMenu',
  props: {
    isHidden: {
      type: Boolean,
      default: true
    }
  }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;

  nav {
    height: 100vh;
    width: 50%;
  }

</style>