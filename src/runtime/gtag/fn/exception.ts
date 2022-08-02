import { event } from './event';
import type { ExceptionParams } from '../../../types';
import { GtagEvents } from '../../../types';

export const exception = (params: ExceptionParams) => {
  event(GtagEvents.exception, params);
};
