<template>
  <div class="min-h-screen bg-black text-white scroll-smooth">
    <!-- Nav Bar -->
    <navbar class="fixed top-0 left-0 w-full z-50" />

    <!-- Hero Carousel -->
    <div
      class="sticky top-0 bg-gradient-to-r from-purple-950/25 via-slate-950 to-purple-950/25 py-4 z-10 h-screen flex items-center">
      <div class="mx-auto overflow-hidden absolute inset-0" v-if="heroSlides.length > 0">
        <div class="max-w-7xl mx-auto relative h-full">
          <img :src="heroSlides[currentSlide]?.image || '/placeholder-hero.jpg'"
            :alt="heroSlides[currentSlide]?.title || 'News'"
            class="w-full h-full transition-all duration-700 object-cover" />
          <div class="absolute bottom-0 left-0 right-0 p-8 bg-black/65 backdrop-blur-sm">
            <h2 class="text-white text-3xl font-mono uppercase tracking-[0.2em] mb-2">
              {{ heroSlides[currentSlide]?.title || 'Loading...' }}
            </h2>
            <p class="text-zinc-300 font-extralight tracking-wide">
              {{ heroSlides[currentSlide]?.description || '' }}
            </p>
          </div>
        </div>
        <!-- Carousel Controls -->
        <button
          class="absolute left-1/6 top-1/2 -translate-y-1/2 bg-zinc-900/80 hover:bg-purple-950 border border-zinc-700 p-3 transition-all duration-300"
          @click="prevSlide">
          <span class="sr-only">Previous</span>
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          class="absolute right-1/6 top-1/2 -translate-y-1/2 bg-zinc-900/80 hover:bg-purple-950 border border-zinc-700 p-3 transition-all duration-300"
          @click="nextSlide">
          <span class="sr-only">Next</span>
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <!-- Carousel Indicators -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3" v-if="heroSlides.length > 0">
        <button v-for="(slide, idx) in heroSlides" :key="slide.id || idx"
          class="w-2 h-2 border border-zinc-600 transition-all duration-300"
          :class="idx === currentSlide ? 'bg-purple-950' : 'bg-transparent hover:bg-zinc-600'"
          @click="goToSlide(idx)"></button>
      </div>
    </div>

    <!-- Content Section -->
    <div class="relative z-20 bg-black">
      <div class="max-w-7xl mx-auto px-4 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <!-- Most Recent Articles -->
          <div class="lg:col-span-2">
            <div class="flex items-center justify-between mb-12">
              <h2 class="text-3xl font-light uppercase tracking-[0.2em] text-white">Latest Articles</h2>
              <button
                class="text-zinc-400 hover:text-white font-mono text-sm uppercase tracking-[0.15em] transition-colors duration-300"
                @click="viewAllArticles">
                View All →
              </button>
            </div>

            <div class="space-y-8" v-if="articles.length > 0">
              <!-- Featured Article -->
              <article class="bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl" v-if="featuredArticle">
                <img :src="featuredArticle.image || '/placeholder-news.jpg'" :alt="featuredArticle.title"
                  class="w-full h-64 object-cover opacity-80">
                <div class="p-8">
                  <div class="flex items-center mb-4">
                    <span class="bg-transparent border text-xs font-light px-3 py-1 uppercase tracking-[0.1em]"
                      :class="getCategoryClasses(featuredArticle.category)">
                      {{ featuredArticle.category || 'News' }}
                    </span>
                    <span class="text-zinc-500 text-xs ml-4 uppercase tracking-[0.1em]">
                      {{ formatTimeAgo(featuredArticle.publishedAt) }}
                    </span>
                  </div>
                  <h3 class="text-2xl font-light text-white mb-4 uppercase tracking-[0.15em]">
                    {{ featuredArticle.title }}
                  </h3>
                  <p class="text-zinc-300 font-light leading-relaxed mb-6">
                    {{ featuredArticle.excerpt || featuredArticle.description }}
                  </p>
                  <div class="flex items-center pt-4 border-t border-zinc-800" v-if="featuredArticle.author">
                    <div class="w-10 h-10 bg-zinc-800 border border-zinc-700 mr-4 overflow-hidden">
                      <img v-if="featuredArticle.author.avatar" :src="featuredArticle.author.avatar"
                        :alt="featuredArticle.author.name" class="w-full h-full object-cover">
                    </div>
                    <div>
                      <p class="text-sm font-light text-white uppercase tracking-[0.1em]">
                        {{ featuredArticle.author.name }}
                      </p>
                      <p class="text-xs text-zinc-500 uppercase tracking-[0.05em]">
                        {{ featuredArticle.author.title || 'Reporter' }}
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Article List -->
              <div class="space-y-6">
                <article v-for="article in regularArticles" :key="article.id"
                  class="bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                  @click="openArticle(article)">
                  <div class="flex">
                    <div class="w-24 h-24 bg-zinc-800 border border-zinc-700 mr-6 flex-shrink-0 overflow-hidden">
                      <img v-if="article.image" :src="article.image" :alt="article.title"
                        class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center mb-2">
                        <span class="bg-transparent border text-xs font-light px-2 py-1 uppercase tracking-[0.05em]"
                          :class="getCategoryClasses(article.category)">
                          {{ article.category || 'News' }}
                        </span>
                        <span class="text-zinc-500 text-xs ml-3 uppercase tracking-[0.05em]">
                          {{ formatTimeAgo(article.publishedAt) }}
                        </span>
                      </div>
                      <h4 class="font-light text-white mb-2 uppercase tracking-[0.1em] text-lg">
                        {{ article.title }}
                      </h4>
                      <p class="text-zinc-400 text-sm font-light">
                        {{ article.excerpt || article.description }}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <!-- Loading State -->
            <div v-else class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-950 mx-auto mb-4"></div>
              <p class="text-zinc-400 uppercase tracking-[0.1em]">Loading Articles...</p>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Trending -->
            <div class="mb-12">
              <h3 class="text-xl font-light uppercase tracking-[0.2em] text-white mb-6">Trending</h3>
              <div class="bg-zinc-900 border border-zinc-800 p-6">
                <div class="space-y-6" v-if="trendingArticles.length > 0">
                  <div v-for="(article, index) in trendingArticles" :key="article.id"
                    class="flex items-start cursor-pointer hover:opacity-75 transition-opacity"
                    @click="openArticle(article)">
                    <span
                      class="bg-transparent border border-zinc-600 text-zinc-300 text-xs font-light px-2 py-1 mr-4 mt-1">
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <div>
                      <h5 class="font-light text-white text-sm mb-1 uppercase tracking-[0.05em]">
                        {{ article.title }}
                      </h5>
                      <p class="text-xs text-zinc-500 uppercase tracking-[0.05em]">
                        {{ formatReaderCount(article.views || article.readCount) }} readers
                      </p>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center py-6">
                  <p class="text-zinc-500 text-sm">Loading trending articles...</p>
                </div>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="mb-12">
              <div class="bg-gradient-to-br from-purple-950 to-slate-950 border border-zinc-800 p-8">
                <h3 class="text-lg font-light uppercase tracking-[0.15em] text-white mb-3">Stay Updated</h3>
                <p class="text-sm font-light text-zinc-300 mb-6">
                  Get notified when your favorite author releases a new article.
                </p>
                <form @submit.prevent="subscribeNewsletter" class="space-y-4">
                  <input type="email" placeholder="Email Address" v-model="newsletterEmail" required
                    class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300 text-sm uppercase tracking-[0.05em]">
                  <button type="submit" :disabled="isSubscribing"
                    class="w-full bg-transparent border border-white text-white py-3 px-6 font-light text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-[0.1em] disabled:opacity-50">
                    {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
                  </button>
                </form>
              </div>
            </div>

            <!-- Categories -->
            <div class="mb-12">
              <h3 class="text-xl font-light uppercase tracking-[0.2em] text-white mb-6">Categories</h3>
              <div class="bg-zinc-900 border border-zinc-800 p-6">
                <div class="space-y-3" v-if="categories.length > 0">
                  <a v-for="category in categories" :key="category.slug" :href="`/category/${category.slug}`"
                    class="flex items-center justify-between py-3 px-0 border-b border-zinc-800 hover:border-zinc-600 transition-colors duration-300 group">
                    <span
                      class="text-zinc-300 group-hover:text-white text-sm font-light uppercase tracking-[0.05em] transition-colors duration-300">
                      {{ category.name }}
                    </span>
                    <span class="bg-transparent border border-zinc-600 text-zinc-400 text-xs px-2 py-1">
                      {{ category.articleCount || 0 }}
                    </span>
                  </a>
                </div>
                <div v-else class="text-center py-6">
                  <p class="text-zinc-500 text-sm">Loading categories...</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div>
              <h3 class="text-xl font-light uppercase tracking-[0.2em] text-white mb-6">Connect</h3>
              <div class="flex space-x-4">
                <a v-for="social in socialLinks" :key="social.platform" :href="social.url" target="_blank"
                  rel="noopener noreferrer"
                  class="bg-transparent border border-zinc-700 text-zinc-400 p-3 hover:border-purple-950 hover:text-purple-950 transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon">
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import navbar from '../components/navbar.vue';

// Types
interface Author {
  id: string;
  name: string;
  title?: string;
  avatar?: string;
}

interface Article {
  id: string;
  title: string;
  description?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  category: string;
  publishedAt: string;
  author?: Author;
  views?: number;
  readCount?: number;
  featured?: boolean;
}

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  articleCount?: number;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// API Configuration
const API_BASE_URL = import.meta.env.VUE_APP_API_URL || 'http://localhost:3000/api';

// Reactive Data
const heroSlides = ref<HeroSlide[]>([]);
const articles = ref<Article[]>([]);
const trendingArticles = ref<Article[]>([]);
const categories = ref<Category[]>([]);
const socialLinks = ref<SocialLink[]>([]);
const currentSlide = ref(0);
const newsletterEmail = ref('');
const isSubscribing = ref(false);

// Computed Properties
const featuredArticle = computed(() =>
  articles.value.find(article => article.featured) || articles.value[0]
);

const regularArticles = computed(() =>
  articles.value.filter(article => !article.featured).slice(0, 5)
);

// Carousel Management
let intervalId: number | undefined;

function nextSlide() {
  if (heroSlides.value.length > 0) {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.value.length;
  }
}

function prevSlide() {
  if (heroSlides.value.length > 0) {
    currentSlide.value = (currentSlide.value - 1 + heroSlides.value.length) % heroSlides.value.length;
  }
}

function goToSlide(idx: number) {
  currentSlide.value = idx;
}

// API Functions
function fetchHeroSlides() {
  fetch(`${API_BASE_URL}/hero-slides`)
    .then(response => response.json())
    .then(data => {
      heroSlides.value = data.slides || data;
    })
    .catch(error => {
      console.error('Error fetching hero slides:', error);
      // Fallback to default slides if API fails
      heroSlides.value = [
        {
          id: '1',
          image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
          title: 'Breaking News',
          description: 'Stay updated with the latest breaking news from around the world.',
        }
      ];
    });
}

function fetchArticles() {
  fetch(`${API_BASE_URL}/articles?limit=10`)
    .then(response => response.json())
    .then(data => {
      articles.value = data.articles || data;
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
}

function fetchTrendingArticles() {
  fetch(`${API_BASE_URL}/articles/trending?limit=4`)
    .then(response => response.json())
    .then(data => {
      trendingArticles.value = data.articles || data;
    })
    .catch(error => {
      console.error('Error fetching trending articles:', error);
    });
}

function fetchCategories() {
  fetch(`${API_BASE_URL}/categories`)
    .then(response => response.json())
    .then(data => {
      categories.value = data.categories || data;
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });
}

function fetchSocialLinks() {
  fetch(`${API_BASE_URL}/social-links`)
    .then(response => response.json())
    .then(data => {
      socialLinks.value = data.links || data;
    })
    .catch(error => {
      console.error('Error fetching social links:', error);
      // Fallback to default social links
      socialLinks.value = [
        {
          platform: 'twitter',
          url: '#',
          icon: '<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />'
        },
        {
          platform: 'facebook',
          url: '#',
          icon: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />'
        },
        {
          platform: 'youtube',
          url: '#',
          icon: '<path d="M23.498 6.186c-.273-1.02-1.08-1.827-2.1-2.1C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.398.54c-1.02.273-1.827 1.08-2.1 2.1C0 8.079 0 12 0 12s0 3.921.502 5.814c.273 1.02 1.08 1.827 2.1 2.1 1.893.54 9.398.54 9.398.54s7.505 0 9.398-.54c1.02-.273 1.827-1.08 2.1-2.1C24 15.921 24 12 24 12s0-3.921-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />'
        }
      ];
    });
}

// Event Handlers
function subscribeNewsletter() {
  if (!newsletterEmail.value || isSubscribing.value) return;

  isSubscribing.value = true;

  fetch(`${API_BASE_URL}/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: newsletterEmail.value }),
  })
    .then(response => {
      if (response.ok) {
        alert('Successfully subscribed to newsletter!');
        newsletterEmail.value = '';
      } else {
        throw new Error('Subscription failed');
      }
    })
    .catch(error => {
      console.error('Newsletter subscription error:', error);
      alert('Failed to subscribe. Please try again.');
    })
    .finally(() => {
      isSubscribing.value = false;
    });
}

function openArticle(article: Article) {
  // Navigate to article detail page
  window.location.href = `/article/${article.id}`;
}

function viewAllArticles() {
  window.location.href = '/articles';
}

// Utility Functions
function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const publishDate = new Date(dateString);
  const diffInHours = Math.floor((now.getTime() - publishDate.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours} hours ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays} days ago`;

  const diffInWeeks = Math.floor(diffInDays / 7);
  return `${diffInWeeks} weeks ago`;
}

function formatReaderCount(count: number | undefined): string {
  if (!count) return '0';
  if (count < 1000) return count.toString();
  if (count < 1000000) return `${(count / 1000).toFixed(1)}k`;
  return `${(count / 1000000).toFixed(1)}M`;
}

function getCategoryClasses(category: string): string {
  const categoryColors: Record<string, string> = {
    'breaking': 'border-purple-600 text-purple-400',
    'politics': 'border-blue-600 text-blue-400',
    'technology': 'border-green-600 text-green-400',
    'business': 'border-purple-600 text-purple-400',
    'sports': 'border-yellow-600 text-yellow-400',
    'entertainment': 'border-pink-600 text-pink-400',
  };

  return categoryColors[category?.toLowerCase()] || 'border-zinc-600 text-zinc-400';
}

// Lifecycle Hooks
onMounted(() => {
  // Start carousel
  intervalId = window.setInterval(nextSlide, 5000);

  // Fetch all data
  fetchHeroSlides();
  fetchArticles();
  fetchTrendingArticles();
  fetchCategories();
  fetchSocialLinks();
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>