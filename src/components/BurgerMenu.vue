<template>
  <div class="w-screen">

    <nav class="bg-stone-600 w-2/3 right-0 flex flex-col items-center justify-center fixed z-20">
      
      <Icon name="codicon:close" class="w-16 h-16 text-white font-size-48" />

    </nav>

  </div>
</template>


<script lang="ts">

import { Icon } from '@iconify/vue';

export default {
  name: 'BurgerMenu',
  components: {
    Icon
  }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;

  nav {
    height: 100vh;
  }


</style>