import NuxtGTag from '../dist/module.mjs';

export default defineNuxtConfig({
  modules: [
    NuxtGTag
  ],
  gTag: {
    enabled: true,
    debug: true,
    bootstrap: true,
    pageViewTracker: true,
    config: {
      id: 'G-QFJ08DW1PN',
      params: {
        send_page_view: true
      }
    }
  }
})
