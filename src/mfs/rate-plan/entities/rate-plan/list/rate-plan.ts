import { Component } from '@angular/core';
import { RatePlanService } from '../services/rate-plan.service';
import { ActivatedRoute } from '@angular/router';
import { RatePlanModel } from '../models/rate-plan.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'rate-plan',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class RatePlan extends EntityListPage<RatePlanModel> {
  title = 'rate-plans';

  constructor(
    readonly ratePlanService: RatePlanService,
    readonly activatedRoute: ActivatedRoute
) {
    super(ratePlanService, new RatePlanModel(), activatedRoute);
  }
}
