import { config } from './config';

export const customMap = (map: unknown) => {
  config({
    customMap: map,
  });
};
