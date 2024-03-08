<template>
    <button @click="calculatorStore.press" class="bg-very-dark-color rounded-xl flex items-center justify-center h-20 text-lg">
        <slot></slot>
    </button>
</template>

<script setup> 
import { useCalculatorStore } from '@/stores/calculatorStore'

const calculatorStore = useCalculatorStore()

</script>

