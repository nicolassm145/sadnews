<script setup lang="ts">
// Removed unused imports
</script>

<template>
  <main>
    <nav class="p-4 #171717 bg-neutral-800">
      <div class="flex gap-4">
        <router-link to="/" class="text-blue-400 hover:text-blue-300">Home</router-link>
        <router-link to="/login" class="text-blue-400 hover:text-blue-300">Login</router-link>
      </div>
    </nav>
    <router-view />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>