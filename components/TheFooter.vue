<template>
  <footer class="flex items-center justify-center w-full text-gray-50 text-md lg:py-10 py-6">
    <a href="https://www.linkedin.com/in/davorminchorov" target="_blank" rel="noreferrer" class="pl-4">
      <linkedin-icon :size="32" />
    </a>
    <a href="https://github.com/davorminchorov" target="_blank" rel="noreferrer" class="pl-4">
      <github-icon :size="32" />
    </a>
    <a href="https://twitter.com/davorminchorov" target="_blank" rel="noreferrer" class="pl-4">
      <twitter-icon :size="32" />
    </a>
  </footer>
</template>

<script setup lang="ts">
import GithubIcon from 'vue-material-design-icons/Github.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';

</script>
