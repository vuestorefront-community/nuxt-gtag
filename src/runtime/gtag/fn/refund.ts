import { event } from './event';
import { GtagEvents, RefundParams } from '../../../module';

export const refund = (params: RefundParams) => {
  event(GtagEvents.refund, params);
};
