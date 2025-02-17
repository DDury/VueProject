import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userAuthen = defineStore('userAuthen', () => {
  const isAuth = ref(false)
  const login = () => {
    isAuth.value = true
  }
  const logout = () => {
    isAuth.value = false
  }
  return { isAuth, login, logout }
})
