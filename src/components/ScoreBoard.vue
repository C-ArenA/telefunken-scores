<template>
    <div class="overflow-x-auto" v-if="gameStore.playersCount > 0">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>Jugador(a)</th>
                    <th>Compras</th>
                    <th class="text-lg">{{gameStore.currentStage}}</th>
                    <th>Total</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- row 1 -->
                <template v-for="(item, index) in gameStore.players" :key="index">
                    <PlayerRow :name="item.name"/>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import PlayerRow from "@/components/PlayerRow.vue";
import { useGameStore } from '@/stores/game'

const gameStore = useGameStore()
</script>

<style scoped></style>