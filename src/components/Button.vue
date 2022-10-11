<template>
  <a :href="HREF">
    <button :class="[span ? 'span' : '']">
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
    span: {
      type: Boolean,
      default: false
    },
  }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;

  button {
    background-color: $primary-50;
    font-weight: 700;
  }

  .span {
    width: 100%;
  }

</style>