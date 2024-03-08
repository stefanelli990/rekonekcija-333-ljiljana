import { defineStore } from 'pinia'

export const useCalculatorStore = defineStore('calculatorStore', {
  state: () => ({ 
    buttons: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '='],
    pressed: [],

  }),
  getters: {
    output: (state) => {
      return state.pressed.join('')
    },
    // calculate: (state) => {
    //   return state.pressed
    // }

  },
  actions: {
    press(e) {
   
    const button = e.target.textContent
    this.pressed.push(button)
  
    },
  },
})
