import { computed, useGtag, useRuntimeConfig } from '#imports';
import { logger } from '../utils/logger';

export const useDebug = () => {
  const { gTag } = useRuntimeConfig();
  const { config } = useGtag();
  const debugEnabled = gTag.debug;
  const hasDebugConfig = computed(() => {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      window[gTag.dataLayerName].findIndex((i) =>
        JSON.stringify(i).includes('debug'),
      ) > -1
    );
  });

  if (debugEnabled && !hasDebugConfig.value) {
    config({ debug_mode: true });
    logger(
      'GTag debugger enabled. Please check the logs in your Google Analytics DebugView page.',
    );
  }
};
