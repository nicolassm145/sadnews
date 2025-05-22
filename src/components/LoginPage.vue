<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2" for="email">Email</label>
                    <input v-model="email" id="email" type="email" required
                        class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 mb-2" for="password">Password</label>
                    <input v-model="password" id="password" type="password" required
                        class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
            <p class="mt-4 text-center text-sm text-gray-600">
                Don't have an account?
                <router-link to="/register" class="text-blue-600 hover:underline">Register</router-link>
            </p>
        </div>
    </div>
</template>


<style scoped>
.read-the-docs {
    color: #888;
}
</style>