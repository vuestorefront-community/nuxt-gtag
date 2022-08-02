import { event } from './event';
import type { RefundParams } from '../../../types';
import { GtagEvents } from '../../../types';

export const refund = (params: RefundParams) => {
  event(GtagEvents.refund, params);
};
