<template>
  <Layout>
    <p>List works</p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "ListPage",
  components: {
    Layout,
  },
});
</script>
