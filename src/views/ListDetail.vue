<template>
  <Layout>
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="!isLoading && !list">Data not found</div>
    <div v-else>
      <form class="list-container">
        <div class="left-container">
          <div class="form-group">
            <label class="form-label" for="email">Image:</label>
            <div class="image-container">
              <img :src="list?.image_url" :alt="list?.name" />
            </div>
            <input class="form-input" type="file" id="email" name="image" />
          </div>
        </div>

        <div class="right-container">
          <div class="form-group">
            <label class="form-label" for="name">Name:</label>
            <input
              class="form-input"
              type="text"
              id="name"
              name="name"
              :value="list?.name"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="description">Description:</label>
            <textarea
              class="form-input"
              type="text"
              id="description"
              name="description"
              :value="list?.description"
            ></textarea>
          </div>

          <div class="form-group">
            <label class="form-label" for="brand">Brand:</label>
            <input
              class="form-input"
              type="text"
              id="brand"
              name="brand"
              :value="list?.brand"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="origin">origin:</label>
            <input
              class="form-input"
              type="text"
              id="origin"
              name="origin"
              :value="list?.origin"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="price_usd">Price (USD):</label>
            <input
              class="form-input"
              type="number"
              id="price_usd"
              name="price_usd"
              :value="list?.price_usd"
            />
          </div>

          <button type="submit" class="form-button">Submit</button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getList } from "@/api/endPoint";
import { List } from "@/types/api";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "ListDetailPage",
  components: {
    Layout,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id as string;
    const list = ref<List | undefined>(undefined);
    const isLoading = ref(true);
    const error = ref<string | null>(null);

    const fetchList = async () => {
      isLoading.value = true;
      try {
        const data = await getList(id);
        list.value = data.data;
      } catch (err) {
        error.value = "Failed to fetch users";
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchList();
    });

    return {
      list,
      isLoading,
      error,
    };
  },
});
</script>

<style lang="scss">
.list-container {
  display: flex;
  max-width: 500px;
  gap: 0.5rem;
  margin-inline: auto;
}

.left-container {
  width: 30%;
  overflow: hidden;
}

.right-container {
  flex-grow: 1;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
}

.form-button {
  margin-top: 0.5rem;
  width: 100%;
  padding: 1rem 0;
  border: none;
  cursor: pointer;
}

.image-container {
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
