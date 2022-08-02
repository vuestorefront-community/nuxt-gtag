import transformObjectKeys from 'transform-object-keys';
import { isBrowser } from '../utils/isBrowser';
import { getOptions } from '../utils/getOptions';
import { optOut } from './fn/optOut';
import { GTAG_GLOBAL } from '../utils/global';
import { Options } from '../../types';

export const createDataLayer = (options: Options) => {
  if (!isBrowser()) {
    return;
  }

  const { enabled, dataLayerName } = options;

  window[dataLayerName] = window[dataLayerName] || [];
  // eslint-disable-next-line func-names
  window[GTAG_GLOBAL] = function () {
    // eslint-disable-next-line prefer-rest-params,@typescript-eslint/no-unsafe-call
    window[dataLayerName].push(arguments);
  };

  if (!enabled) {
    optOut();
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return,consistent-return
  return window[GTAG_GLOBAL];
};
