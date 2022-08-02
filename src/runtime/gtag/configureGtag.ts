import transformObjectKeys from 'transform-object-keys';
import { query } from './fn/query';
import type { Options } from '../../types';

export const configureGtag = (options: Options) => {
  const { config, includes } = options;

  query(
    'config',
    config.id,
    transformObjectKeys(config.params, { deep: true, snakeCase: true }),
  );

  if (Array.isArray(includes)) {
    includes.forEach((domain) => {
      query(
        'config',
        domain.id,
        transformObjectKeys(domain.params, { deep: true, snakeCase: true }),
      );
    });
  }
};
