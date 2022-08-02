import { createDataLayer } from './createDataLayer';
import { configureGtag } from './configureGtag';
import { loadExternalScript } from '../utils/loadExternalScript';
import { query } from './fn/query';
import { Options } from '../types';

export const loadScript = async (options: Options) => {
  const {
    config,
    customResourceURL,
    customPreConnectOrigin,
    dataLayerName,
    deferScriptLoad,
    disableScriptLoad,
  } = options;

  createDataLayer(options);
  query('js', new Date());
  configureGtag(options);

  if (disableScriptLoad) {
    return;
  }
  await loadExternalScript(
    `${customResourceURL}?id=${config.id}&l=${dataLayerName}`,
    {
      preconnectOrigin: customPreConnectOrigin,
      defer: deferScriptLoad,
    },
  );
};
