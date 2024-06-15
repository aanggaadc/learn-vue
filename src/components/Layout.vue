<template>
  <Header />

  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";

export default defineComponent({
  name: "LayoutComponent",
  components: {
    Header,
  },
});
</script>

<style lang="scss">
main {
  padding: 1rem 0.5rem;
  border: 1px solid black;
}
</style>
