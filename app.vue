<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useMeta } from "#meta";

useMeta({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
  ],
  bodyAttrs: {
    class: 'h-screen-full bg-emerald-500 dark:bg-gray-900 mt-10'
  }
});
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
