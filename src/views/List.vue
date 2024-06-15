<template>
  <Layout>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <table class="table">
        <thead class="table-head">
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price (USD)</th>
            <th>Production</th>
            <th>Expired</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody class="table-body">
          <tr v-for="(list, index) in lists" :key="index">
            <td>{{ list.name }}</td>
            <td>{{ list.brand }}</td>
            <td>{{ list.price_usd }}</td>
            <td>{{ list.production_date }}</td>
            <td>{{ list.expiration_date }}</td>
            <td>
              <router-link :to="`/list/${list.id}`">View</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAllList } from "../api/endPoint";
import { List } from "../types/api";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "ListPage",
  components: {
    Layout,
  },
  data() {
    return {
      lists: [] as List[] | undefined,
      isLoading: true,
      error: null as string | null,
    };
  },
  methods: {
    async fetchLists() {
      this.isLoading = true;
      try {
        const data = await getAllList();
        this.lists = data.data;
      } catch (err) {
        this.error = "Failed to fetch users";
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchLists();
  },
});
</script>

<style lang="scss">
.table {
  width: 100%;
}

.table-head {
  text-align: left;
  font-weight: 700;
}

th,
td {
  padding: 0.5rem;
}
</style>
