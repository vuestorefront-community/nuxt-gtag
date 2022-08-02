import { query } from './query';

export const set = (...args: Record<string, unknown>[]) => {
  query('set', ...args);
};
