<script setup lang="ts">
</script>

<template>
    <div class="min-h-screen flex flex-col bg-black">
        <div class="flex-1 flex items-center justify-center py-12">
            <div class="w-full max-w-sm lg:max-w-md mx-4 bg-zinc-900 border border-zinc-800 p-12 shadow-2xl">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <!-- Minimalist logo -->
                    <div class="text-center mb-8">
                        <div class="w-8 h-8 bg-white mx-auto">
                        </div>
                    </div>
                    <h1 class="text-center text-xl font-light tracking-[0.2em] text-white uppercase">
                        Registration
                    </h1>
                </div>

                <div class="mt-12">
                    <form class="space-y-8">
                        <div class="grid grid-cols-2 gap-6">
                            <div>
                                <label for="firstName"
                                    class="block text-xs font-light text-zinc-300 uppercase tracking-[0.15em] mb-3">
                                    First Name
                                </label>
                                <input id="firstName" name="firstName" type="text" required
                                    class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300"
                                    autocomplete="given-name" />
                            </div>
                            <div>
                                <label for="lastName"
                                    class="block text-xs font-light text-zinc-300 uppercase tracking-[0.15em] mb-3">
                                    Last Name
                                </label>
                                <input id="lastName" name="lastName" type="text" required
                                    class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300"
                                    autocomplete="family-name" />
                            </div>
                        </div>

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
                            <label for="password"
                                class="block text-xs font-light text-zinc-300 uppercase tracking-[0.15em] mb-3">
                                Password
                            </label>
                            <input id="password" name="password" type="password" required
                                class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300"
                                autocomplete="new-password" />
                        </div>

                        <div>
                            <label for="confirmPassword"
                                class="block text-xs font-light text-zinc-300 uppercase tracking-[0.15em] mb-3">
                                Confirm Password
                            </label>
                            <input id="confirmPassword" name="confirmPassword" type="password" required
                                class="w-full px-0 py-3 border-0 border-b border-zinc-700 bg-transparent text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors duration-300"
                                autocomplete="new-password" />
                        </div>

                        <div class="pt-4">
                            <button type="submit"
                                class="w-full py-4 px-8 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-black">
                                Create Account
                            </button>
                        </div>
                    </form>

                    <div class="mt-12 pt-8 border-t border-zinc-800">
                        <p class="text-center text-xs text-zinc-500 uppercase tracking-[0.1em]">
                            Already Registered?
                            <router-link to="/login"
                                class="text-white hover:text-zinc-300 transition-colors duration-200 ml-2">
                                Sign In
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>