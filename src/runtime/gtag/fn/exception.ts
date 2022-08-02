import { event } from './event';
import { ExceptionParams, GtagEvents } from '../../../types';

export const exception = (params: ExceptionParams) => {
  event(GtagEvents.exception, params);
};
