<script setup lang="ts">
// Removed unused imports
</script>

<template>
  <main class="min-h-screen flex flex-col">
    <nav class="p-4 bg-purple-950">
      <div class="flex gap-4">
        <router-link to="/" class="text-purple-400 hover:text-purple-300">Home</router-link>
        <router-link to="/login" class="text-purple-400 hover:text-purple-300">Login</router-link>
      </div>
    </nav>
    <router-view />
  </main>
</template>

