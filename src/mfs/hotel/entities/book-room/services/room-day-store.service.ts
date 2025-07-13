import {Injectable} from '@angular/core';
import {ReservationModel} from '../../reservation/models/reservation.model';
import {BehaviorSubject} from 'rxjs';
import {RoomModel} from 'hotel/entities/room/models/room.model';

@Injectable({providedIn: 'root'})
export class RoomDayStoreService {
  private readonly reservations$$ = new BehaviorSubject<ReservationModel[]>([]);
  private readonly rooms$$ = new BehaviorSubject<RoomModel[]>([]);
  private readonly days$$ = new BehaviorSubject<Date[]>([]);

  get reservations$() {
    return this.reservations$$.asObservable();
  }

  set reservations(reservations: ReservationModel[]) {
    this.reservations$$.next(reservations);
  }

  get rooms$() {
    return this.rooms$$.asObservable();
  }

  set rooms(rooms: RoomModel[]) {
    this.rooms$$.next(rooms);
  }

  get days$() {
    return this.days$$.asObservable();
  }

  set days(days: Date[]) {
    this.days$$.next(days);
  }
}
