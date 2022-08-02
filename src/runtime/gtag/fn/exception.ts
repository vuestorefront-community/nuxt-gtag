import { event } from './event';
import { ExceptionParams, GtagEvents } from '../../../module';

export const exception = (params: ExceptionParams) => {
  event(GtagEvents.exception, params);
};
