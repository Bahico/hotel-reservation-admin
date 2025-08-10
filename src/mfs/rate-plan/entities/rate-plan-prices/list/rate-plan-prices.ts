import { Component } from '@angular/core';
import { RatePlanPricesService } from '../services/rate-plan-prices.service';
import { ActivatedRoute } from '@angular/router';
import { RatePlanPricesModel } from '../models/rate-plan-prices.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'rate-plan-prices',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class RatePlanPrices extends EntityListPage<RatePlanPricesModel> {
  title = 'rate-plan-prices';

  constructor(
    readonly ratePlanPricesService: RatePlanPricesService,
    readonly activatedRoute: ActivatedRoute
) {
    super(ratePlanPricesService, new RatePlanPricesModel(), activatedRoute);
  }
}
