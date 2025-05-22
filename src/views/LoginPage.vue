<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen flex flex-col bg-black">
        <div class="flex-1 flex items-center justify-center">
            <div class="w-full max-w-sm lg:max-w-md mx-4 bg-zinc-900 border border-zinc-800 p-12 shadow-2xl">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <!-- Minimalist logo -->
                    <div class="text-center mb-8">
                        <div class="w-8 h-8 bg-white mx-auto">
                        </div>
                    </div>
                    <h1 class="text-center text-xl font-light tracking-[0.2em] text-white uppercase">
                        Authentication
                    </h1>
                </div>

                <div class="mt-12">
                    <form class="space-y-8">
                        <div>
                            <label for="email"
                                class="block text-xs font-light text-zinc-300 uppercase tracking-[0.15em] mb-3">
                                Email Address
                            </label>
                            <input id="email" name="email" type="email" required
                                class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300"
                                autocomplete="email" />
                        </div>

                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <label for="password"
                                    class="block text-xs font-light text-zinc-300 uppercase tracking-[0.15em]">
                                    Password
                                </label>
                                <a href="#"
                                    class="text-xs text-zinc-400 hover:text-white uppercase tracking-[0.1em] transition-colors duration-200">
                                    Forgot?
                                </a>
                            </div>
                            <input id="password" name="password" type="password" required
                                class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300"
                                autocomplete="current-password" />
                        </div>

                        <div class="pt-4">
                            <button type="submit"
                                class="w-full py-4 px-8 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-black">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div class="mt-12 pt-8 border-t border-zinc-800">
                        <p class="text-center text-xs text-zinc-500 uppercase tracking-[0.1em]">
                            No Account?
                            <router-link to="/register"
                                class="text-white hover:text-zinc-300 transition-colors duration-200 ml-2">
                                Register
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>