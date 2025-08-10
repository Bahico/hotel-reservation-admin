import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { RatePlanRuleSettingModel } from '../models/rate-plan-rule-setting.model';

@Injectable({providedIn: 'root'})
export class RatePlanRuleSettingService extends BaseClientCrudService<RatePlanRuleSettingModel> {
  listModification = 'rate-plan-rule-settings';

  constructor() {
    super(new RatePlanRuleSettingModel(), 'api/rate-plan-rule-settings', 'rateplanms');
  }
}
