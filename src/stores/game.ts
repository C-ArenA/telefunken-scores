import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface Stage {
  name: string,
  score?: number,
  buys?: number
}
interface Player {
  name: string
  coins: number
  stages: Array<Stage>
  total: number
  pos?: number
}
export const useGameStore = defineStore('game', () => {
  const stages = ref([
    'Trica',
    '2 Tricas',
    'Cuadra',
    '2 Cuadras',
    'Quina',
    '2 Quinas',
    'Escalera'
  ])
  const currentStage = ref('Trica');
  const players = ref<Array<Player>>([])
  const playersCount = computed(() => players.value.length)

  function addPlayer(name: string) {
    players.value.push({
      name: name,
      coins: 7,
      stages: [
        {name: 'Trica', score:undefined, buys:undefined},
        {name: '2 Tricas', score:undefined, buys:undefined},
        {name: 'Cuadra', score:undefined, buys:undefined},
        {name: '2 Cuadras', score:undefined, buys:undefined},
        {name: 'Quina', score:undefined, buys:undefined},
        {name: '2 Quinas', score:undefined, buys:undefined},
        {name: 'Escalera', score:undefined, buys:undefined},
      ],
      total: 0,
      pos: undefined
    })
  }

  const orderedPlayers = computed(()=>{
    return players.value.slice().sort((a,b)=>{
      return a.total - b.total;
    })
  })

  function setPositions(){
    players.value.forEach(player=>{
      player.pos = 1 + (orderedPlayers.value.findIndex(orderedPlayer=>orderedPlayer.name == player.name));
    })
  }

  function getPlayer(name: string): Player | null {
    let selectedPlayer = null;
    players.value.forEach((player) => {
      console.log(player.name);
      console.log(name);
      
      if (player.name == name) {
        console.log('yeahhh');
        selectedPlayer = player;
      }
    })
    return selectedPlayer
  }
  return { players, playersCount, addPlayer, getPlayer, stages, currentStage, setPositions }
})
