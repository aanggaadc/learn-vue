<template>
  <Layout>
    <div class="form-container">
      <form class="form" @submit.prevent="submitForm">
        <div class="form-group">
          <label class="form-label" for="email">Email:</label>
          <input
            class="form-input"
            type="email"
            id="email"
            name="email"
            v-model="formState.email"
            @blur="validateEmail"
            @focus="resetErrorState('email')"
          />

          <span v-if="formState.errors.email" class="error-message">{{
            formState.errors.email
          }}</span>
        </div>

        <div class="form-group">
          <label class="form-label" for="password">Password:</label>
          <input
            class="form-input"
            type="password"
            id="password"
            name="password"
            v-model="formState.password"
            @blur="validatePassword"
            @focus="resetErrorState('password')"
          />
          <span v-if="formState.errors.password" class="error-message">{{
            formState.errors.password
          }}</span>
        </div>

        <button type="submit" class="form-button" :disabled="!isFormValid">
          Submit
        </button>
      </form>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    Layout,
  },
  setup() {
    const formState = reactive({
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    });

    const resetErrorState = (key: string) => {
      formState.errors[key as keyof typeof formState.errors] = "";
    };

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formState.email) {
        formState.errors.email = "Email is required.";
      } else if (!emailPattern.test(formState.email)) {
        formState.errors.email = "Invalid email format.";
      } else {
        formState.errors.email = "";
      }
    };
    const validatePassword = () => {
      if (!formState.password) {
        formState.errors.password = "Password is required.";
      } else {
        formState.errors.password = "";
      }
    };

    const isEmailValid = computed(() => {
      return !!formState.email && !formState.errors.email;
    });

    const isPasswordValid = computed(() => {
      return !!formState.password && !formState.errors.password;
    });

    const isFormValid = computed(() => {
      return isEmailValid.value && isPasswordValid.value;
    });

    const submitForm = () => {
      const { email, password } = formState;
      validateEmail();
      validatePassword();
      if (isFormValid.value) {
        alert(`Email: ${email}\nPassword: ${password}`);
        formState.email = "";
        formState.password = "";
      }
    };

    return {
      formState,
      resetErrorState,
      validateEmail,
      validatePassword,
      isFormValid,
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
}
</style>
