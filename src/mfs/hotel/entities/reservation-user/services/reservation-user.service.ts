import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {ReservationUserModel} from '../models/reservation-user.model';

@Injectable({providedIn: 'root'})
export class ReservationUserService extends BaseClientCrudService<ReservationUserModel> {
  listModification =  'reservation-user';

  constructor() {
    super(new ReservationUserModel(), 'api/reservation-users', 'hotelms');
  }
}
