import { Component } from '@angular/core';
import { RatePlanRuleSettingService } from '../services/rate-plan-rule-setting.service';
import { ActivatedRoute } from '@angular/router';
import { RatePlanRuleSettingModel } from '../models/rate-plan-rule-setting.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'rate-plan-rule-setting',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class RatePlanRuleSetting extends EntityListPage<RatePlanRuleSettingModel> {
  title = 'rate-plan-rule-settings';

  constructor(
    readonly ratePlanRuleSettingService: RatePlanRuleSettingService,
    readonly activatedRoute: ActivatedRoute
) {
    super(ratePlanRuleSettingService, new RatePlanRuleSettingModel(), activatedRoute);
  }
}
