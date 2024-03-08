<template>
     <div class="bg-slate-600 min-h-screen md:flex md:items-center md:justify-center">
            <div class="min-h-screen text-white overflow-hidden md:rounded-2xl flex flex-col">
                  <div class="h-full bg-gradient-to-b p-2 flex justify-end items-end flex-col text-right from-dark-color to-very-dark-color md:h-60">
                        
                        <div class="text-5xl">{{ calculatorStore.output }}</div>
                  </div>
                  <div class=" grid grid-cols-4 gap-2 p-2 bg-dark-color">
           
                        <calculator-btn v-for="(button, index) in calculatorStore.buttons" :key="index">{{ button }}</calculator-btn>
                  </div>
            </div>
     </div>
</template>

<script setup>

import { useCalculatorStore } from '@/stores/calculatorStore'
import { Icon } from '@iconify/vue'
import CalculatorBtn from './components/CalculatorBtn.vue'


const calculatorStore = useCalculatorStore()



</script>

