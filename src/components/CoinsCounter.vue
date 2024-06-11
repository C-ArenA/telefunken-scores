<template>
    <div class="flex items-center gap-2 flex-col-reverse">
        <button @click="$emit('buy')" class="btn btn-xs btn-secondary"><v-icon name="fa-minus"/></button>
        <span class="badge badge-lg"><p class="pr-2">{{props.coins}}</p> <CoinIcon/></span>
        <button @click="$emit('egg')" class="btn btn-xs btn-primary"><v-icon name="fa-plus"/></button>
    </div>
</template>

<script setup lang="ts">
import CoinIcon from '@/components/icons/CoinIcon.vue'
const props = defineProps(['coins'])
</script>

<style scoped>

</style>