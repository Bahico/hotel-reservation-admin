import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {ReservationModel} from '../models/reservation.model';
import {map} from 'rxjs';
import {HttpResponse} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ReservationService extends BaseClientCrudService<ReservationModel> {
  listModification = 'reservation';

  constructor() {
    super(new ReservationModel(), 'api/reservations', 'hotelms');
  }

  override getAll(query: any) {
    return super.getAll(query).pipe(
      map((response) => {
        return new HttpResponse({
          ...response, body: response.body.map((item) => {
            item.checkInDate = new Date(item.checkInDate);
            item.checkOutDate = new Date(item.checkOutDate);
            return item;
          })
        });
      })
    );
  }
}
