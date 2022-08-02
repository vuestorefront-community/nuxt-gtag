import { event } from './event';
import { GtagEvents, RefundParams } from '../../types';

export const refund = (params: RefundParams) => {
  event(GtagEvents.refund, params);
};
