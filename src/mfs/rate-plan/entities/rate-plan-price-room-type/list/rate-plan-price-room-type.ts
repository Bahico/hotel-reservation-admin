import { Component } from '@angular/core';
import { RatePlanPriceRoomTypeService } from '../services/rate-plan-price-room-type.service';
import { ActivatedRoute } from '@angular/router';
import { RatePlanPriceRoomTypeModel } from '../models/rate-plan-price-room-type.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'rate-plan-price-room-type',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class RatePlanPriceRoomType extends EntityListPage<RatePlanPriceRoomTypeModel> {
  title = 'rate-plan-price-room-types';

  constructor(
    readonly ratePlanPriceRoomTypeService: RatePlanPriceRoomTypeService,
    readonly activatedRoute: ActivatedRoute
) {
    super(ratePlanPriceRoomTypeService, new RatePlanPriceRoomTypeModel(), activatedRoute);
  }
}
