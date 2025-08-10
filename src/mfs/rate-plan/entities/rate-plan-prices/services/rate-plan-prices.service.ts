import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { RatePlanPricesModel } from '../models/rate-plan-prices.model';

@Injectable({providedIn: 'root'})
export class RatePlanPricesService extends BaseClientCrudService<RatePlanPricesModel> {
  listModification = 'rate-plan-prices';

  constructor() {
    super(new RatePlanPricesModel(), 'api/rate-plan-prices', 'rateplanms');
  }
}
