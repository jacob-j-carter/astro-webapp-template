<template>

  <section class="flex justify-between items-center w-full p-2 mx-auto absolute z-10">

  <div class="w-16 h-16 bg-stone-500 rounded-xl p-2">
    <a href="/">
      <img src="/favicon.svg" alt="logo">
    </a>
  </div>

  <div class="w-16 h-16 bg-stone-500 rounded-xl p-2" @click="$emit('toggle-menu')">
    <img src="/assets/images/icons/burgermenu.svg" alt="logo" class="w-full">
  </div>

  </section>

</template>


<script lang="ts">

export default {
  name: 'MobileButtons',
  // props: {

  // },
  // data () {
  //   return {
      
  //   }
  // },
  // methods: {

  // },
  // created () {

  // }
}

</script>


<style scoped lang="scss">
  @use '../../sass/abstracts' as *;
  @use '../../sass/themes' as *;



</style>