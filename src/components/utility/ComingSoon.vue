<template>

  <main class="absolute top-0 left-0 bottom-0 right-0 flex items-center px-20">

    <article class="w-2/3">
      <div class="flex items-center">

        <img src="/assets/images/photos/jacobcarterheadshot.png" alt="headshot of jacob carter" class="aspect-square rounded-full w-24">
        <div class="ml-4">
          <strong class="text-white m-0 font-size-22">
            Jacob J. Carter
          </strong>
          <p class="text-white m-0 font-size-20">
            Web Developer
          </p>
        </div>

      </div>
      <h2 class="text-white font-size-84 lg:w-2/3">
        Our website is coming soon!
      </h2>
    </article>

  </main>

</template>


<script lang="ts">
import { Icon } from '@iconify/vue';

export default {
  name: 'ComingSoon',
  components: {
		Icon,
	},
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

  main {
    z-index: 9999;
    background-color: #0e0e0e;
  }

  h2 {
    font-family: 'Felix', 'Montserrat' ,sans-serif;
  }

  strong, p {
    font-family: 'Montserrat', sans-serif;
  }

</style>