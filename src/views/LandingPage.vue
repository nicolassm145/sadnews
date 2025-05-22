<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';

defineProps<{ msg: string }>();
const msg = ref('Hello World!');
</script>

<template>
<<<<<<< HEAD:src/views/HelloWorld.vue
  <NavBar />
  <h1>{{ msg }}</h1>
=======
  <div class="min-h-screen flex flex-col bg-stone-950">
    <h1 class="text-9xl font-bold text-white pb-5">Home Page</h1>
  </div>
>>>>>>> b428f185aadeca4588785a3b661af0aca2c4f305:src/views/LandingPage.vue
</template>
