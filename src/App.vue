<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "./router";

export default defineComponent({
  name: "App",
  router,
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

a {
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2rem 1rem 0;
}
</style>
