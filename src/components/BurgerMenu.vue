<template>
  <div class="w-screen">

    <nav class="bg-stone-600 w-2/3 right-0 flex flex-col items-center justify-center fixed z-20">
      
      <Icon name="codicon:close" />

    </nav>

  </div>
</template>


<script lang="ts">

import { Icon } from 'astro-icon';

export default {
  name: 'BurgerMenu'
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;

  nav {
    height: 100vh;
  }


</style>