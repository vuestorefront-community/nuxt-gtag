import { event } from './event';
import { GtagEvents, PurchaseParams } from '../../../module';

export const purchase = (params: PurchaseParams) => {
  event(GtagEvents.purchase, params);
};
