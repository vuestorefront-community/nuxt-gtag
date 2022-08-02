import { event } from './event';
import { GtagEvents, PurchaseParams } from '../../../types';

export const purchase = (params: PurchaseParams) => {
  event(GtagEvents.purchase, params);
};
