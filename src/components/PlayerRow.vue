<template>
    <tr>
        <th>
            <div class="flex items-center gap-3 flex-col justify-center text-center">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img :src="'https://robohash.org/' + props.name + '?set=set1'"
                            alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div class="badge badge-md badge-ghost"><v-icon v-if="player?.pos==1" class="text-yellow-400 w-3" name="fa-chess-queen"/>{{ player?.pos }}</div>
                <div class="font-bold">{{ props.name }}</div>
            </div>
        </th>
        <td>
            <CoinsCounter :coins="player?.coins" @buy="buy" @egg="egg" />
        </td>
        <td>
            <div class="min-w-20">
                <template v-for="(stage, index) in player?.stages" :key="index">
                    <input v-model="stage.score" v-if="gameStore.currentStage == stage.name" @input="setTotal" type="number"
                        :placeholder="stage.name" class="input input-primary w-full max-w-xs" />
                </template>
            </div>
        </td>
        <th>
            {{ player?.total }}
        </th>
        <td>
            <button class="btn btn-ghost"><v-icon name="md-deleteforever" /></button>
        </td>
    </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CoinsCounter from '@/components/CoinsCounter.vue'
import { useGameStore } from '@/stores/game';
const props = defineProps(['name'])
const gameStore = useGameStore();
const player = computed(() => gameStore.getPlayer(props.name))

const buy = () => {
    if (player.value != null && player.value.coins > 0) {
        player.value.coins = player.value.coins - 1;
    }
}

const egg = () => {
    if (player.value != null && player.value.coins < 10) {
        player.value.coins = player.value.coins + 1;
    }
}


const setTotal = () => {
    if (player.value != null) {
        player.value.total = player.value.stages.reduce((acc, stage) => {
            if (stage.score != undefined) {
                return acc + stage.score;
            }
            return acc;
        }, 0)
        gameStore.setPositions();
    }
}
</script>

<style scoped></style>