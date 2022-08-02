import { useRuntimeConfig } from '#imports';
import type { Options } from '../../types';

export const getOptions = (): Options => {
  return useRuntimeConfig()?.gTag as Options;
};
