<script setup lang="ts">
import Button from '../components/PurpleButton.vue';
</script>

<template>

    <div class="min-h-screen flex flex-row text-white bg-gradient-to-r from-purple-950 to-slate-950">
        <div class="flex flex-row text-justify p-8 m-36 h-full">
            <div class="max-w-8xl h-fit gap-8 flex flex-col">
                <h1 class="text-5xl font-extrabold uppercase">A Experiência Pura da Leitura e Escrita.</h1>
                <h2 class="text-3xl font-semibold uppercase">Sem algoritmos, sem distrações. Apenas você, o conteúdo e
                    a
                    conexão.</h2>
                <p class="font-light">Em um mundo digital saturado, nós oferecemos um refúgio. Uma plataforma construída
                    de
                    usuário para usuário,
                    onde a autenticidade e a relevância são prioridades. Aqui, não há caixas pretas ditando o que é
                    popular
                    ou o
                    que você deve ver. Sua curiosidade guia sua leitura, e a qualidade da sua escrita atrai sua
                    audiência.
                    Uma
                    comunidade genuína, sem filtros invisíveis.</p>
                <div class="flex flex-row w-full justify-between items-start">
                    <div class="flex flex-col gap-4 mt-8 max-w-sm">
                        <h3 class="text-3xl font-bold uppercase tracking-tighter">Sua Jornada de Leitura</h3>
                        <p>Você decide o que explorar. Artigos recomendados pelos próprios usuários, listas temáticas ou
                            autores
                            que você escolhe seguir. A navegação é orgânica, impulsionada por interesse e curiosidade.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4 mt-8 max-w-sm">
                        <h3 class="text-3xl font-bold uppercase tracking-tighter">Sua Jornada de Escrita</h3>
                        <p>Publique com confiança. Seu conteúdo aparece para quem busca, para quem se interessa pelos
                            seus
                            tópicos. Conecte-se diretamente com leitores que valorizam a profundidade e a originalidade.
                        </p>
                    </div>
                </div>
            </div>
            <div class="max-w-5xl gap-8 flex flex-col items-center justify-center text-justify px-20">
                <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"
                    class="w-30 h-30">
                    <rect x="4" y="4" width="112" height="112" class="stroke-purple-950 fill-none" stroke-width="15" />
                    <path d="M60 25L80 80L60 95L40 80L60 25Z" class="fill-purple-950" />
                    <line x1="60" y1="42" x2="60" y2="82" class="stroke-white" stroke-width="2" />
                    <circle cx="60" cy="62" r="3" class="fill-white" />
                </svg>
                <p class="text-4xl uppercase tracking-widest">Redescubra o Prazer de Ler e Escrever</p>
                <Button text="Create Account" />
            </div>
        </div>
    </div>
</template>