import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { useDebug } from './helpers/useDebug';
import { useGtag } from './composables/useGtag';
import { loadScript } from './gtag/loadScript';
import { routerTrackConfig } from './gtag/routerConfig';

export default defineNuxtPlugin((nuxtApp) => {
  const { gTag: options } = useRuntimeConfig();

  nuxtApp.vueApp.use({
    install: async (app) => {
      app.config.globalProperties.$gtag = useGtag();

      if (options.bootstrap) {
        await loadScript(options);
        useDebug();
        await routerTrackConfig(options);
      }
    },
  });

  nuxtApp.provide('gtag', nuxtApp.vueApp.config.globalProperties.$gtag);
});
