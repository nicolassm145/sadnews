<template>
    <div class="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
        <!-- Moving Background Lines -->
        <div class="background-lines">
            <div class="line" style="left: 5%; animation-delay: 0s;"></div>
            <div class="line" style="left: 15%; animation-delay: 1s;"></div>
            <div class="line" style="left: 25%; animation-delay: 2s;"></div>
            <div class="line" style="left: 35%; animation-delay: 0.5s;"></div>
            <div class="line" style="left: 45%; animation-delay: 1.5s;"></div>
            <div class="line" style="left: 55%; animation-delay: 2.5s;"></div>
            <div class="line" style="left: 65%; animation-delay: 0.8s;"></div>
            <div class="line" style="left: 75%; animation-delay: 1.8s;"></div>
            <div class="line" style="left: 85%; animation-delay: 2.2s;"></div>
            <div class="line" style="left: 95%; animation-delay: 0.3s;"></div>
        </div>

        <div class="relative z-10 text-center px-8">
            <div class="mb-8">
                <h1 class="text-8xl md:text-9xl text-white tracking-[0.3em] mb-4 font-roboto">404</h1>
                <div class="w-32 h-px bg-white mx-auto mb-8"></div>
                <h2 class="text-xl font-light text-zinc-300 uppercase tracking-[0.2em] mb-4">
                    Page Not Found
                </h2>
                <p class="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed mb-12">
                    The page you are looking for has vanished into the void.
                    Like our friend here, it seems to have fallen into nothingness.
                </p>
            </div>

            <div class="space-y-4">
                <router-link to="/"
                    class="inline-block px-8 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 hover:bg-zinc-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-black">
                    Return Home
                </router-link>
                <div>
                    <button @click="goBack"
                        class="text-xs text-zinc-400 hover:text-white uppercase tracking-[0.1em] transition-colors duration-200">
                        Go Back
                    </button>
                </div>
            </div>

            <!-- Floating Figure positioned under the Go Back button -->
            <div class="flex mt-16 align-center justify-center">
                <img src="../assets/falling.png" alt="Falling Figure" class="w-32 h-auto rotate-45 floating-figure" />
            </div>
        </div>

    </div>
</template>

<script setup>
const goBack = () => {
    window.history.back()
}
</script>

<style scoped>
/* Moving background lines for depth */
.background-lines {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.line {
    position: absolute;
    width: 1px;
    height: 100vh;
    background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
    animation: moveDown 4s infinite linear;
}

.floating-figure {
    animation:
        gentleFloat 3s ease-in-out infinite,
        subtleRotate 4s ease-in-out infinite;
}

@keyframes moveDown {
    0% {
        transform: translateY(100vh);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        transform: translateY(-100vh);
        opacity: 0;
    }
}

/* Animations */
@keyframes gentleFloat {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-2px);
    }
}

@keyframes subtleRotate {

    0%,
    100% {
        transform: rotate(-2deg);
    }

    50% {
        transform: rotate(2deg);
    }
}

/* Floating particles */
.particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
}

.particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    animation: float 8s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(-100vh);
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
}
</style>