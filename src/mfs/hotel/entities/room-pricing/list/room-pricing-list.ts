import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {RoomPricingModel} from '../models/room-pricing.model';
import {RoomPricingService} from '../services/room-pricing.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

@Component({
  imports: [MfList, RootSharedModule],
  providers: [RoomPricingService],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class RoomPricingList extends EntityListPage<RoomPricingModel> {
  title = 'room-pricings';

  constructor(
    readonly amenityService: RoomPricingService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new RoomPricingModel(), activatedRoute);
  }
}
