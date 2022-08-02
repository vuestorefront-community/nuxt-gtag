import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';
import type { Options } from './types';

export interface ModuleOptions extends Options {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-gtag',
    configKey: 'gTag',
  },
  defaults: {
    bootstrap: true,
    config: {
      id: null,
      params: {
        sendPageView: false,
      },
    },
    customPreConnectOrigin: 'https://www.googletagmanager.com',
    customResourceURL: 'https://www.googletagmanager.com/gtag/js',
    debug: false,
    defaultGroupName: 'default',
    deferScriptLoad: false,
    disableScriptLoad: false,
    enabled: true,
    dataLayerName: 'dataLayer',
    includes: null,
    onAfterTrack: null,
    onBeforeTrack: null,
    pageViewTracker: true,
    pageViewExcludedRoutes: [],
    pageViewPrependBase: true,
    pageViewScreenViewEnabled: false,
    pageViewSkipSamePath: true,
    pageViewTemplate: null,
    pageViewUseFullPath: false,
  },
  setup(options, nuxt) {
    if (options.enabled) {
      const runtimeDir = fileURLToPath(new URL('runtime', import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);

      nuxt.options.runtimeConfig.public.gTag = ({ ...options } ||
        {}) as ModuleOptions;

      nuxt.options.build.transpile.push(runtimeDir);

      addPlugin(resolve(runtimeDir, 'plugin'));

      nuxt.hook('autoImports:dirs', (dirs) => {
        dirs.push(resolve(runtimeDir, 'composables'));
      });
    }
  },
});
