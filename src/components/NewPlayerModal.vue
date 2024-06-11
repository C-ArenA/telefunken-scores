<template>
    <div class="modal-box">
        <h3 class="font-bold text-lg">Nuevo Jugador!</h3>
        <p class="py-4">Ingrese los datos del nuevo jugador</p>
        <label class="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
                <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" class="grow" placeholder="Nombre" v-model="name"/>
        </label>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
                <button class="btn btn-primary" @click="addPlayer" :disabled="name == null">Añadir</button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '@/stores/game';
const gameStore = useGameStore();
const name = ref<string|null>(null);
const addPlayer = ()=>{
    if (name.value != null) {
        gameStore.addPlayer(name.value);
        name.value = '';
    }
}
</script>

<style scoped></style>