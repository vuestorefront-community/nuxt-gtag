import { useRuntimeConfig } from '#imports';
import { Options } from '../../types';

export const getOptions = (): Options => {
  return useRuntimeConfig()?.gTag as Options;
};
