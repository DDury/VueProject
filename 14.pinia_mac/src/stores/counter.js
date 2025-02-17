import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const ddbleCount = computed(() => {
    const recal = doubleCount.value * 2
    if (recal > 100) {
      return 100
    }
    if (recal < 0) {
      return 0
    }
    return recal
  })
  const increment = (num) => {
    count.value += num
  }
  const decrement = (nu) => {
    count.value -= nu
  }

  const plus5 = () => {
    setTimeout(() => {
      count.value += 5
    }, 2000)
  }
  return { count, doubleCount, increment, decrement, ddbleCount, plus5 }
})
