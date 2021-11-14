<template>
  <div class="container mx-auto">
    <h3 class="text-center font-bold gray-700 uppercase mt-48 text-4xl">
      Welcome to Davor Minchorov's Personal Website and Blog
    </h3>
<!--    <nav class="mx-auto mt-10 text-center space-x-5 text-xl">-->
<!--      <NuxtLink :to="{name: 'blog'}" class="hover:text-green-600">Blog</NuxtLink>-->
<!--    </nav>-->

    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>
