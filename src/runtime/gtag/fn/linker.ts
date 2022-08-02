import { config } from './config';

export const linker = (params: string) => {
  config('linker', params);
};
