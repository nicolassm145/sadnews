<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-stone-950">
    <h1 class="text-9xl font-bold text-white pb-5">Home Page</h1>
  </div>
</template>
