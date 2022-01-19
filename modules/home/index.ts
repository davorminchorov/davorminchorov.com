import { defineNuxtModule } from '@nuxt/kit'
import {join} from 'pathe';

export default defineNuxtModule({
  name: 'home',
  configKey: 'home',
  setup (options, nuxt) {
    nuxt.hook('components:dirs', (dirs: any) => {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'components'),
      });
    });

    nuxt.options.router.extendRoutes = (routes, resolve) => {
      routes.push({
        name: 'home',
        path: '/home',
        component: resolve(__dirname, 'pages/home.vue')
      })
    }
  },
})
