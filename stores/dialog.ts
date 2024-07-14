import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', () => {
  const dialog = ref(false)

  const updateDialog = (value: boolean) => {
    dialog.value = value
  }

  return {
    dialog,
    updateDialog
  }
})
