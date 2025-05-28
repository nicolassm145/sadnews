<template>
    <button
        :class="['relative bg-white text-black hover:text-white w-full py-4 px-8 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-600 group', customClass]">
        <span
            class="absolute inset-0 bg-purple-950 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out z-0"
            style="z-index: 0;"></span>
        <span class="relative z-10 ">{{ text }}</span>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    text?: string;
    onClick?: () => void;
    customClass?: string;
}>();
</script>
