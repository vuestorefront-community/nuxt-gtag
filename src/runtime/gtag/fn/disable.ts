import { isBrowser } from '../../utils/isBrowser';
import { getOptions } from '../../utils/getOptions';

const disableGlobalGa = (id: string, value: boolean) => {
  if (!isBrowser()) {
    return;
  }

  window[`ga-disable-${id}`] = value;
};

export const disable = (value = true) => {
  const { config, includes } = getOptions();

  disableGlobalGa(config.id, value);

  if (Array.isArray(includes)) {
    includes.forEach((domain) => disableGlobalGa(domain.id, value));
  }
};
