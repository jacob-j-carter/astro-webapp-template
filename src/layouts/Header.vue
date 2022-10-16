<template>
  <div>

    <DesktopHeader />

    <MobileHeader />


  </div>
</template>


<script lang="ts">
import DesktopHeader from "./DesktopHeader.vue";
import MobileHeader from "./MobileHeader.vue";

export default {
    name: "Header",
    components: { DesktopHeader, MobileHeader }
}

</script>


<style scoped lang="scss">
  @use '../sass/abstracts' as *;
  @use '../sass/themes' as *;



</style>