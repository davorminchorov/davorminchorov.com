<template>
  <div class="flex flex-row justify-around">
    <div>
      <NuxtLink to="/" class="uppercase text-2xl text-gray-50 hover:text-gray-200 dark:text-emerald-500 dark:hover:text-emerald-600 font-bold tracking-wider mr-10">
        Davor Minchorov
      </NuxtLink>
    </div>
    <nav>
      <ul class="flex flex-row justify-between space-x-4">
        <button type="button" role="button" v-if="isDarkTheme" @click="setLightTheme">
          <SunIcon class="h-6 w-6 text-gray-50 dark:text-emerald-500 dark:hover:text-emerald-600"/>
        </button>
        <button type="button" role="button" v-if="isLightTheme" @click="setDarkTheme">
          <MoonIcon class="h-6 w-6 text-gray-50 dark:text-emerald-500 dark:hover:text-emerald-600"/>
        </button>
        <NuxtLink to="about" class="hover:text-gray-200 text-gray-50 dark:text-emerald-500 dark:hover:text-emerald-600 text-xl font-semibold tracking-wide">
          About
        </NuxtLink>
        <NuxtLink to="blog" class="hover:text-gray-200 text-gray-50 dark:text-emerald-500 dark:hover:text-emerald-600 text-xl font-semibold tracking-wide">
          Blog
        </NuxtLink>
        <NuxtLink to="contact" class="hover:text-gray-200 text-gray-50 dark:text-emerald-500 dark:hover:text-emerald-600 text-xl font-semibold tracking-wide">
          Contact
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/solid';
import {useMeta} from "#meta";
import useTheme from "~/composables/useTheme";

const { theme,  isLightTheme, isDarkTheme, setLightTheme, setDarkTheme } = useTheme();

useMeta({
  htmlAttrs: {
    class: theme.value === 'light' ? '' : 'dark'
  }
});

</script>

