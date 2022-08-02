import { useRuntimeConfig } from '#imports';
import { Options } from '../../module';

export const getOptions = (): Options => {
  return useRuntimeConfig()?.gTag as Options;
};
