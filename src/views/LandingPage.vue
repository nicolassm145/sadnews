<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

defineProps<{ msg: string }>();
const msg = ref('Hello World!');
</script>

<template>
  <NavBar />
  <div class="min-h-screen flex flex-col bg-stone-950">
    <h1 class="text-9xl font-bold text-white pb-5">Home Page</h1>
  </div>
</template>
