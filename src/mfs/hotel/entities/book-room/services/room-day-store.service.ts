import {Injectable} from '@angular/core';
import {ReservationModel} from '../../reservation/models/reservation.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RoomDayStoreService {
  private readonly reservations$$ = new BehaviorSubject<ReservationModel[]>([]);

  get reservations$() {
    return this.reservations$$.asObservable();
  }

  set reservations(reservations: ReservationModel[]) {
    this.reservations$$.next(reservations);
  }
}
