<template>
  <Layout>
    <div class="form-container">
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label" for="title">Title:</label>
          <input
            class="form-input"
            type="text"
            id="title"
            formControlName="title"
            v-model="formState.title"
          />
        </div>

        <div v-for="(nationality, index) in formState.nationality" :key="index">
          <div class="form-group">
            <label class="form-label" for="country">Country:</label>
            <select
              class="form-input"
              id="country"
              v-model="nationality.country"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="city">City:</label>
            <div class="city-input-container">
              <select class="form-input" id="city" v-model="nationality.city">
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
              <button
                v-if="formState.nationality.length > 1"
                type="button"
                class="form-button remove"
                @click="removeNationality(index)"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <button type="button" class="form-button" @click="addNationality">
          Add
        </button>
        <button type="submit" class="form-button">Submit</button>
      </form>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from "vue";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "RegisterPage",
  components: {
    Layout,
  },
  setup() {
    const formState = reactive({
      title: "",
      nationality: [
        {
          country: "",
          city: "",
        },
      ],
    });

    const addNationality = () => {
      formState.nationality.push({
        country: "",
        city: "",
      });
    };

    const removeNationality = (index: number) => {
      if (formState.nationality.length > 1) {
        formState.nationality.splice(index, 1);
      }
    };

    const submitForm = () => {
      alert(JSON.stringify(toRaw(formState), null, 2));
    };

    return {
      formState,
      addNationality,
      removeNationality,
      submitForm,
    };
  },
});
</script>

<style lang="scss">
.form-container {
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
  align-items: center;
  justify-content: center;
}

.form {
  width: 100%;
  max-width: 300px;
  margin-inline: auto;
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

  &.remove {
    width: 30%;
    margin-top: 0;
  }
}

.city-input-container {
  display: flex;
  gap: 5px;
}
</style>
