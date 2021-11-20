import { defineNuxtModule } from '@nuxt/kit'
import {join} from "pathe";

export default defineNuxtModule({
  name: 'blog',
  configKey: 'blog',
  setup (options, nuxt) {
    nuxt.hook('components:dirs', (dirs: any) => {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'components'),
      });
    });

    nuxt.options.router.extendRoutes = (routes, resolve) => {
      routes.push({
        name: 'blog',
        path: '/blog',
        component: resolve(__dirname, 'pages/blog.vue')
      })
    }
  },
})
