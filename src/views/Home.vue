<template>
  <Layout>
    <p>Home Works</p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Layout,
  },
});
</script>
