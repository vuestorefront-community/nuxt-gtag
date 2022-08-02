import { config } from '../gtag/fn/config';
import { customMap } from '../gtag/fn/customMap';
import { event } from '../gtag/fn/event';
import { exception } from '../gtag/fn/exception';
import { linker } from '../gtag/fn/linker';
import { optIn } from '../gtag/fn/optIn';
import { optOut } from '../gtag/fn/optOut';
import { pageView } from '../gtag/fn/pageView';
import { purchase } from '../gtag/fn/purchase';
import { query } from '../gtag/fn/query';
import { refund } from '../gtag/fn/refund';
import { set } from '../gtag/fn/set';

export const useGtag = () => {
  return {
    config,
    customMap,
    event,
    exception,
    linker,
    optIn,
    optOut,
    pageView,
    purchase,
    query,
    refund,
    set,
  };
};
