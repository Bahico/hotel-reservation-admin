import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { BookingConfirmationModel } from '../models/booking-confirmation.model';

@Injectable({providedIn: 'root'})
export class BookingConfirmationService extends BaseClientCrudService<BookingConfirmationModel> {
  listModification = 'booking-confirmations';

  constructor() {
    super(new BookingConfirmationModel(), 'api/booking-confirmations', 'rateplanms');
  }
}
