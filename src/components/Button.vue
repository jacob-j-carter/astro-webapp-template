<template>
  <a :href="HREF">
    <button>
      {{ content }}
    </button>
  </a>
</template>


<script lang="ts">

export default {
  name: 'Placeholder',
  props: {
    HREF: {
      type: String,
      default: '/'
    },
    content: {
      type: String,
      default: 'Click Me!'
    },
  }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;



</style>