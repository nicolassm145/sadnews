<template>
  <div>
    <h1>Notícias</h1>
    <ul>
      <li v-for="news in newsList" :key="news">{{ news }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getNews } from '../services/newsApi';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const newsList = ref<string[]>([]);

    onMounted(async () => {
      try {
        const response = await getNews();
        newsList.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    });

    return {
      newsList,
    };
  },
});
</script>