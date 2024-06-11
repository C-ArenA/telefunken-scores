<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <RouterLink to="/" class="btn btn-ghost text-xl">Telefunken</RouterLink>
        </div>
        <div class="flex-none">
            <button class="btn btn-ghost"> 
                <v-icon name="fa-eraser"/>
            </button>
            <button class="btn btn-ghost" @click="gameStore.players=[]"> 
                <v-icon name="io-refresh-circle" class="text-red-500"/>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game';
const gameStore = useGameStore();
</script>

<style scoped></style>