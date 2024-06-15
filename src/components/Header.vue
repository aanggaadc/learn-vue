<template>
  <header>
    <h1>Vue Training</h1>

    <nav>
      <ul>
        <router-link to="/" custom v-slot="{ isActive }">
          <li :class="['link', { active: isActive }]">
            <router-link to="/">Home</router-link>
          </li>
        </router-link>
        <router-link to="/login" custom v-slot="{ isActive }">
          <li :class="['link', { active: isActive }]">
            <router-link to="/login">Login</router-link>
          </li>
        </router-link>
        <router-link to="/register" custom v-slot="{ isActive }">
          <li :class="['link', { active: isActive }]">
            <router-link to="/register">Register</router-link>
          </li>
        </router-link>
        <router-link to="/list" custom v-slot="{ isActive }">
          <li :class="['link', { active: isActive }]">
            <router-link to="/list">List</router-link>
          </li>
        </router-link>
        <li class="link">
          <router-link to="/404">404</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style lang="scss">
h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

ul {
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-bottom: none;
}

li {
  border-right: 1px solid black;

  &:nth-last-child(1) {
    border-right: none;
  }
}

.link {
  display: block;
  padding: 0.5rem 0.75rem;

  &.active {
    background-color: #000;
    color: #fff;
  }
}
</style>
