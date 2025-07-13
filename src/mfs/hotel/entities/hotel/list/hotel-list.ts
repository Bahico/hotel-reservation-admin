import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {HotelModel} from '../models/hotel.model';
import {HotelService} from '../services/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';

@Component({
  imports: [MfList],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class HotelList extends EntityListPage<HotelModel> {
  title = 'hotels';

  constructor(
    readonly amenityService: HotelService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new HotelModel(), activatedRoute);
  }
}
