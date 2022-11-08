<template>

  <header class="flex justify-between items-center w-full p-2 mx-auto absolute z-10">

  <div class="w-16 h-16 bg-stone-500 rounded-xl p-2">
    <a href="/">
      
    </a>
  </div>

  <div class="w-16 h-16 bg-stone-500 rounded-xl p-2" @click="$emit('toggle-menu')">

    
  </div>

  </header>

</template>


<script lang="ts">

export default {
  name: 'MobileButtons',
  // components: {

	// },
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