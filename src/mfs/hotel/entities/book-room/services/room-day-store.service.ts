import {Injectable} from '@angular/core';
import {ReservationModel} from '../../reservation/models/reservation.model';
import {BehaviorSubject} from 'rxjs';
import {RoomModel} from 'hotel/entities/room/models/room.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class RoomDayStoreService {
  private readonly reservations$$ = new BehaviorSubject<ReservationModel[]>([]);
  private readonly rooms$$ = new BehaviorSubject<RoomModel[]>([]);
  private readonly days$$ = new BehaviorSubject<Date[]>([]);

  readonly colWidth = '120px';

  reservationsFilter$(roomId: number) {
    return this.reservations$$.asObservable()
      .pipe(
        map((reservations: ReservationModel[]) => reservations.filter(reservation => reservation.room?.id === roomId))
      );
  }

  set reservations(reservations: ReservationModel[]) {
    this.reservations$$.next(reservations);
  }

  getIndexReservation(reservation: ReservationModel): number {
    return this.reservations$$.value.findIndex(item => item.id === reservation.id);
  }

  editReservation(reservation: ReservationModel, index: number) {
    const reservations = this.reservations$$.value;
    reservations[index] = {
      ...reservation,
      checkInDate: new Date(reservation.checkInDate),
      checkOutDate: new Date(reservation.checkOutDate),
    };
    this.reservations$$.next(reservations);
  }

  set addReservation(reservation: ReservationModel) {
    this.reservations$$.next([
      ...this.reservations$$.value,
      {
        ...reservation,
        checkInDate: new Date(reservation.checkInDate),
        checkOutDate: new Date(reservation.checkOutDate),
      }
    ]);
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
