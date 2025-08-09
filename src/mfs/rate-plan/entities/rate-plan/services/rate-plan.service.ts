import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { RatePlanModel } from '../models/rate-plan.model';

@Injectable({providedIn: 'root'})
export class RatePlanService extends BaseClientCrudService<RatePlanModel> {
  listModification = 'rate-plans';

  constructor() {
    super(new RatePlanModel(), 'api/rate-plans', 'rateplanms');
  }
}
