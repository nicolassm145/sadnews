<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-900"> <!-- Simplified background -->
        <div class="flex-1 flex items-center justify-center">
            <div class="w-full max-w-sm lg:max-w-md mx-4 bg-gray-800/90 rounded-xl p-8 shadow-2xl backdrop-blur-sm">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <!-- Simple logo placeholder instead of missing Logo component -->
                    <div class="text-center mb-4">
                        <div class="w-12 h-12 bg-indigo-600 rounded-full mx-auto flex items-center justify-center">
                            <span class="text-white font-bold text-xl">L</span>
                        </div>
                    </div>
                    <h2 class="mt-2 text-center text-2xl font-mono font-bold tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div class="mt-10">
                    <form class="space-y-6">
                        <div>
                            <label for="email" class="block text-sm font-medium text-white font-mono">
                                Email address
                            </label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" required
                                    class="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 font-mono"
                                    autocomplete="email" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium text-white font-mono">
                                    Password
                                </label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300 font-mono">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" required
                                    class="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 font-mono"
                                    autocomplete="current-password" />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="w-full flex justify-center py-2 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p class="mt-8 text-center text-sm text-gray-400 font-mono">
                        Don't have an account yet?{" "}
                        <router-link to="/register" class="font-mono text-indigo-400 hover:text-indigo-300">
                            Sign Up
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>