<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

defineProps<{ msg: string }>();
const msg = ref('Hello World!');
</script>

<template>
  <NavBar />
  <h1>{{ msg }}</h1>
</template>
