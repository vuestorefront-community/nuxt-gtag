import transformObjectKeys from 'transform-object-keys';
import { getOptions } from '../../utils/getOptions';
import { query } from './query';
import {
  EventParams,
  EventFunctions,
  EventFunctionsName,
} from '../../../module';

export const event = <N extends EventFunctionsName>(
  name: N,
  params: EventFunctions[N],
  multiple?: EventParams,
) => {
  const { includes, defaultGroupName } = getOptions();
  const baseParams = transformObjectKeys(params || {}, { deep: true });

  if (
    multiple?.sendTo === null &&
    Array.isArray(includes) &&
    includes.length > 0
  ) {
    multiple.sendTo = [
      ...includes.map((domain) => `${domain.id}`),
      ...defaultGroupName,
    ];
  }

  query('event', name, baseParams, multiple);
};
