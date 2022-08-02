import transformObjectKeys from 'transform-object-keys';
import { getOptions } from '../../utils/getOptions';
import { query } from './query';
import type { ControlParams, EventParams } from '../../../types';

export const config = (
  ...args: Array<ControlParams | EventParams | Record<string, unknown> | string>
) => {
  const options = getOptions();

  query('config', options.config.id, ...args);

  if (Array.isArray(options.includes)) {
    options.includes.forEach((domain) => {
      query('config', domain.id, ...args);
    });
  }
};
