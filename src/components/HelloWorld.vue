<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
//import { getNews } from '../services/newsApi';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const newsList = ref<string[]>([]);
  }
});
</script>