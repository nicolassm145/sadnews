<template>
  <nav class="bg-black border-b border-zinc-800">
    <div class="px-8 py-4">
      <div class="flex items-center justify-between">
        <!-- Left: Menu -->
        <div class="flex items-center">
          <button @click="toggleMenu"
            class="p-2 text-white hover:text-zinc-300 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Center: Search -->
        <div class="flex-1 max-w-7xl ">
          <div class="relative">
            <input type="search" placeholder="Search..."
              class="w-full px-2 py-2 bg-transparent border-0 border-b border-zinc-700 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-white transition-colors duration-300" />
            <button
              class="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 text-zinc-500 hover:text-white transition-colors duration-200">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: Profile -->
        <div class="flex items-center">
          <button @click="toggleProfile" class="relative focus:outline-none" aria-label="Profile menu">
            <div
              class="w-8 h-8 bg-zinc-700 border border-zinc-600 flex items-center justify-center hover:border-zinc-500 transition-colors duration-200">
              <svg class="w-4 h-4 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile/Desktop Menu Overlay -->
      <div v-if="showMenu" class="absolute top-18 left-0 w-full bg-zinc-900 border-b border-zinc-800 z-50">
        <div class="px-8 py-6">
          <div class="space-y-4">
            <RouterLink to="/"
              class="block text-xs uppercase tracking-[0.15em] text-zinc-300 hover:text-white transition-colors duration-200"
              @click="closeMenu">
              Home
            </RouterLink>
            <RouterLink to="/dashboard"
              class="block text-xs uppercase tracking-[0.15em] text-zinc-300 hover:text-white transition-colors duration-200"
              @click="closeMenu">
              Dashboard
            </RouterLink>
            <RouterLink to="/projects"
              class="block text-xs uppercase tracking-[0.15em] text-zinc-300 hover:text-white transition-colors duration-200"
              @click="closeMenu">
              Projects
            </RouterLink>
            <RouterLink to="/settings"
              class="block text-xs uppercase tracking-[0.15em] text-zinc-300 hover:text-white transition-colors duration-200"
              @click="closeMenu">
              Settings
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Profile Dropdown -->
      <div v-if="showProfile" class="absolute right-5 w-48 bg-zinc-900 border border-zinc-800 z-50 mt-1">
        <div class="py-2">
          <div class="px-4 py-3 border-b border-zinc-800">
            <p class="text-xs text-zinc-300 uppercase tracking-[0.1em]">John Doe</p>
            <p class="text-xs text-zinc-500 mt-1">john@example.com</p>
          </div>
          <a href="#"
            class="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors duration-200 uppercase tracking-[0.1em]"
            @click="closeProfile">
            Profile
          </a>
          <a href="#"
            class="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors duration-200 uppercase tracking-[0.1em]"
            @click="closeProfile">
            Account
          </a>
          <div class="border-t border-zinc-800 mt-2 pt-2">
            <a href="#"
              class="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors duration-200 uppercase tracking-[0.1em]"
              @click="closeProfile">
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
const showProfile = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  showProfile.value = false
}

const toggleProfile = () => {
  showProfile.value = !showProfile.value
  showMenu.value = false
}

const closeMenu = () => {
  showMenu.value = false
}

const closeProfile = () => {
  showProfile.value = false
}

// Close dropdowns when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('nav')) {
    showMenu.value = false
    showProfile.value = false
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
}
</script>