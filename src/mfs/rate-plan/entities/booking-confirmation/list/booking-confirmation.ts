import { Component } from '@angular/core';
import { BookingConfirmationService } from '../services/booking-confirmation.service';
import { ActivatedRoute } from '@angular/router';
import { BookingConfirmationModel } from '../models/booking-confirmation.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';

@Component({
  selector: 'booking-confirmation',
  template: `<mf-list [page]="this"/>`,
  imports: [
    MfList
  ]
})
export default class BookingConfirmation extends EntityListPage<BookingConfirmationModel> {
  title = 'booking-confirmations';

  constructor(
    readonly bookingConfirmationService: BookingConfirmationService,
    readonly activatedRoute: ActivatedRoute
) {
    super(bookingConfirmationService, new BookingConfirmationModel(), activatedRoute);
  }
}
