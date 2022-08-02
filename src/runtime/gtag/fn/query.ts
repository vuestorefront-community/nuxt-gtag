import transformObjectKeys from 'transform-object-keys';
import { isBrowser } from '../../utils/isBrowser';
import { GTAG_GLOBAL } from '../../utils/global';
import { QueryParams } from '../../types';

export const query = (...params: QueryParams) => {
  if (!isBrowser() || typeof window[GTAG_GLOBAL] === 'undefined') {
    return;
  }

  window[GTAG_GLOBAL](
    ...params
      .map((curr) =>
        typeof curr === 'object' && curr !== null && !(curr instanceof Date)
          ? transformObjectKeys(curr, { deep: true, snakeCase: true })
          : curr,
      )
      .filter(Boolean),
  );
};
