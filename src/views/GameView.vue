<template>
    <main>
        <NavBar></NavBar>
        <LevelTimeline />
        <ScoreBoard />
        <div class="mx-auto w-fit my-5">
            <button class="btn btn-primary" onclick="new_player_modal.showModal()">Añadir Jugador <v-icon
                    name="fa-plus" /></button>
        </div>
        <dialog id="new_player_modal" class="modal">
            <NewPlayerModal />
        </dialog>
    </main>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import LevelTimeline from '@/components/LevelTimeline.vue';
import ScoreBoard from '@/components/ScoreBoard.vue';
import NewPlayerModal from '@/components/NewPlayerModal.vue';
import { ref } from 'vue';
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()


const message = ref('Hola');
</script>

<style scoped></style>