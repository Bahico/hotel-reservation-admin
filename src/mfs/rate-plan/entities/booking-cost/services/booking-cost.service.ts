import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { BookingCostModel } from '../models/booking-cost.model';

@Injectable({providedIn: 'root'})
export class BookingCostService extends BaseClientCrudService<BookingCostModel> {
  listModification = 'booking-costs';

  constructor() {
    super(new BookingCostModel(), 'api/booking-costs', 'rateplanms');
  }
}
