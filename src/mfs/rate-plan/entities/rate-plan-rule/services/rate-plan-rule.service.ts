import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { RatePlanRuleModel } from '../models/rate-plan-rule.model';

@Injectable({providedIn: 'root'})
export class RatePlanRuleService extends BaseClientCrudService<RatePlanRuleModel> {
  listModification = 'rate-plan-rules';

  constructor() {
    super(new RatePlanRuleModel(), 'api/rate-plan-rules', 'rateplanms');
  }
}
