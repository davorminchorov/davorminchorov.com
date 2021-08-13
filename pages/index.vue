<template>
  <div class="container">
    <button class="w-full rounded-full px-4 py-2 uppercase bg-green-500 hover:bg-green-600 text-white text-lg leading-normal font-bold focus:outline-none active:bg-green-500" @click="increment">
      Increment
    </button>
    <p class="w-full rounded-full px-4 py-2 uppercase bg-blue-500 hover:bg-blue-600 text-white text-lg leading-normal font-bold focus:outline-none active:bg-blue-500">Counter : {{ counter }}</p>
    <button class="w-full rounded-full px-4 py-2 uppercase bg-red-500 hover:bg-red-600 text-white text-lg leading-normal font-bold focus:outline-none active:bg-red-500" @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const counter = ref(0)

    const increment = () => counter.value++
    const decrement = () => counter.value--

    return {
      counter,
      increment,
      decrement
    }
  }
})
</script>

