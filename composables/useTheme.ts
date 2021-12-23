import {useStorage} from "@vueuse/core";
import {computed} from "@vue/reactivity";
import {useMeta} from "#meta";

export default function useTheme() {
  const theme = useStorage('theme', 'light');

  const isLightTheme = computed(() => {
    return theme.value === 'light';
  });

  const isDarkTheme = computed(() => {
    return theme.value === 'dark';
  });

  const setLightTheme = () => {
    theme.value = 'light';
    useStorage('theme', 'light');
    useMeta({
      htmlAttrs: {
        class: '',
      }
    });
  }

  const setDarkTheme = () => {
    theme.value = 'dark';
    useStorage('theme', 'dark');
    useMeta({
      htmlAttrs: {
        class: 'dark',
      }
    });
  }

  return {
    theme,
    isLightTheme,
    isDarkTheme,
    setLightTheme,
    setDarkTheme
  }
}
