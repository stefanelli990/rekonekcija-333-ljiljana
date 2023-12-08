<template>
  
  <div class="max-w-2xl mx-auto shadow-lg px-16 py-16 rounded-2xl -mt-24 z-10 bg-white grid grid-cols-2 gap-4">
    <div class="flex flex-col space-y-2 col-span-2">
      <label for="">Amount</label>
      <input v-model="amount" type="number" class="bg-gray-100 outline-none rounded-lg py-4 px-5 appearance-none">
    </div>

    
      <div class="flex flex-col space-y-2">
        <label for="">From</label>
        <div class="relative">
          <button name="" id="" class="bg-gray-100 outline-none rounded-lg py-3 px-4 w-full flex justify-between items-center" @click="toggleFirstCurrency">
            <div class="flex items-center space-x-2">
              <Icon icon="twemoji:flag-european-union" class="text-3xl"/><span>{{ initialCurrencyValueFirst }}</span>
            </div>
            <Icon icon="octicon:chevron-down-16" />
          </button>
          <ul class="absolute w-full mt-2 h-[221px] overflow-auto bg-gray-100 rounded-lg border border-gray-300" v-show="firstCurrencyIsShown">
            <li @click="selectFirstCurrency(currency, rate)" class=" py-3 px-4 w-full border-b border-gray-300 hover:bg-gray-400" v-for="(rate, currency) in currencyData.conversion_rates" :key="currency">
              <div class="flex items-center space-x-2">
                <img   class="h-10 w-10" alt=""><span>{{ currency }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col space-y-2">
        <label for="">To</label>
        <div class="relative">
          <button name="" id="" class="bg-gray-100 outline-none rounded-lg py-3 px-4 w-full flex justify-between items-center" @click="toggleSecondCurrency">
            <div class="flex items-center space-x-2">
              <Icon icon="twemoji:flag-european-union" class="text-3xl"/><span>{{ initialCurrencyValueSecond }}</span>
            </div>
            <Icon icon="octicon:chevron-down-16" />
          </button>
          <ul class="absolute w-full mt-2 h-[221px] overflow-auto bg-gray-100 rounded-lg border border-gray-300" v-show="secondCurrencyIsShown">
            <li @click="selectSecondCurrency(currency, rate)" class=" py-3 px-4 w-full border-b border-gray-300 hover:bg-gray-400" v-for="(rate, currency) in currencyData.conversion_rates" :key="currency">
              <div class="flex items-center space-x-2">
                <img :src="flagURL" class="h-10 w-10" alt=""><span>{{ currency }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
   
      <!-- result -->
      <button @click="calculate" class="p-4 bg-primaryColor text-white col-span-2">Calculate</button>
      <h1 class="col-span-2 text-center mt-12">{{ result }}</h1>
  </div>
  
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'

const currencyData = ref([])

const initialCurrencyValueFirst = ref('USD')
const initialCurrencyValueSecond = ref('EUR')

const firstCurrencyIsShown = ref(false)
const secondCurrencyIsShown = ref(false)

const firstCurrencyRate = ref(null)
const secondCurrencyRate = ref(null)



const amount = ref(1)

const result = ref(0)

const flagURL = ref(null)
const currencyCode = ref('usd')






const toggleFirstCurrency = () => {
  firstCurrencyIsShown.value = !firstCurrencyIsShown.value
}
const toggleSecondCurrency = () => {
  secondCurrencyIsShown.value = !secondCurrencyIsShown.value
}

const selectFirstCurrency = (currency,rate) => {
  initialCurrencyValueFirst.value = currency
  firstCurrencyRate.value = rate
  console.log(rate)
}

const selectSecondCurrency = (currency,rate) => {
  initialCurrencyValueSecond.value = currency
  secondCurrencyRate.value = rate
  console.log(rate)
}

const calculate = () => {
  result.value = ((secondCurrencyRate.value / firstCurrencyRate.value) * amount.value).toFixed(2);
  console.log(result.value)
}

const fetchData = async () => {
  fetch(`https://v6.exchangerate-api.com/v6/95779948034a4c1b35731e6c/latest/${initialCurrencyValueFirst.value}`)
  .then(response => response.json())
  .then(data => {
    
    currencyData.value = data
    firstCurrencyRate.value = data.conversion_rates.USD
    secondCurrencyRate.value = data.conversion_rates.EUR
    console.log(initialCurrencyValueFirst.value)
    console.log(currencyData.value)
    console.log(firstCurrencyRate.value,secondCurrencyRate.value)
  })
}

const fetchFlags = async () => {
  fetch(`https://restcountries.com/v3.1/currency/${currencyCode.value}`)
  .then(response => response.json())
  .then(data => {
 

    console.log(data[0].flags.svg)
    flagURL.value = data[0].flags.svg
  })
}

onMounted(() => {
  fetchData()
  fetchFlags()
})
</script>