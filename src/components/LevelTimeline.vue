<template>
    <div v-if="gameStore.playersCount > 0" role="tablist" class="tabs tabs-lg tabs-boxed overflow-x-auto mx-3">
        <template v-for="(item, index) in gameStore.stages" :key="index">
            <button :disabled="gameStore.playersCount <= 0" @click="changeStage(item)" role="tab" :class="{tab:true, 'tab-active':gameStore.currentStage == item}" style="white-space: nowrap;">{{item}}</button>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game';
const gameStore = useGameStore();
const changeStage = (selectedStage:string)=>{
    gameStore.currentStage=selectedStage;
}
</script>

<style scoped></style>