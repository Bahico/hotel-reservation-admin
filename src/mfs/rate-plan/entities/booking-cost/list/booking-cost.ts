import { Component } from '@angular/core';
import { BookingCostService } from '../services/booking-cost.service';
import { ActivatedRoute } from '@angular/router';
import { BookingCostModel } from '../models/booking-cost.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'booking-cost',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class BookingCost extends EntityListPage<BookingCostModel> {
  title = 'booking-costs';

  constructor(
    readonly bookingCostService: BookingCostService,
    readonly activatedRoute: ActivatedRoute
) {
    super(bookingCostService, new BookingCostModel(), activatedRoute);
  }
}
