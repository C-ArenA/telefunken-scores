<script setup lang="ts">
import bgPattern from '@/assets/polka-dots.svg'
</script>

<template>
  <main class="container w-screen h-screen grid content-center bg-fixed text-center" :style="{backgroundImage: `url(${bgPattern})`}">
    <h1 class="text-5xl font-bold">Telefunken</h1>
    <p class="py-6">Tablero de Puntajes</p>
    <RouterLink to="/new-game" class="btn btn-primary w-fit mx-auto">Iniciar Juego Nuevo</RouterLink>
  </main>
</template>
