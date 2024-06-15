<template>
  <Layout>
    <p>Login works</p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    Layout,
  },
});
</script>
