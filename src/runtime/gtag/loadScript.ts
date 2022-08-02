import { getOptions } from '../utils/getOptions';
import { createDataLayer } from './createDataLayer';
import { configureGtag } from './configureGtag';
import { routerTrackConfig } from './routerConfig';
import { loadExternalScript } from '../utils/loadExternalScript';
import { Options } from '../../types';
import { query } from './fn/query';

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
