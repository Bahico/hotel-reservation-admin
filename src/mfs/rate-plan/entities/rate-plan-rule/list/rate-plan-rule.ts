import { Component } from '@angular/core';
import { RatePlanRuleService } from '../services/rate-plan-rule.service';
import { ActivatedRoute } from '@angular/router';
import { RatePlanRuleModel } from '../models/rate-plan-rule.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'rate-plan-rule',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class RatePlanRule extends EntityListPage<RatePlanRuleModel> {
  title = 'rate-plan-rules';

  constructor(
    readonly ratePlanRuleService: RatePlanRuleService,
    readonly activatedRoute: ActivatedRoute
) {
    super(ratePlanRuleService, new RatePlanRuleModel(), activatedRoute);
  }
}
