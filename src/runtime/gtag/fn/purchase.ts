import { event } from './event';
import type { PurchaseParams } from '../../../types';
import { GtagEvents } from '../../../types';

export const purchase = (params: PurchaseParams) => {
  event(GtagEvents.purchase, params);
};
