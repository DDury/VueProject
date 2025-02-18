import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthenStore = defineStore('authen', () => {
  const isLoggedIn = ref(false)
  const login = () => {
    isLoggedIn.value = true
  }
  const logout = () => {
    isLoggedIn = false
  }

  return { isLoggedIn, login, logout }
})
