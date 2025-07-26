import {
  Component,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { RoomDayStoreService } from './services/room-day-store.service';
import { RoomDays } from './components/room-days/room-days';
import { months } from '../../core/month';
import {ReservationService} from 'hotel/entities/reservation/services/reservation.service';
import moment from 'moment';
import {RoomService} from 'hotel/entities/room/services/room.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  templateUrl: 'book-room.html',
  imports: [RoomDays],
  styleUrl: 'book-room.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class BookRoom implements OnInit {
  protected readonly roomDayStoreService = inject(RoomDayStoreService);
  private readonly reservationService = inject(ReservationService);
  private readonly roomService = inject(RoomService);

  rooms = toSignal(this.roomDayStoreService.rooms$);
  days = toSignal(this.roomDayStoreService.days$);
  months = signal(months);

  ngOnInit() {
    this.createDates();
    this.loadReservations();
    this.loadRooms();
  }

  createDates() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const days = [];
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let day = 1; day <= totalDays; day++) {
      days.push(new Date(year, month, day));
    }

    this.roomDayStoreService.days = days;
  }

  loadReservations() {
    this.reservationService
      .getAll(this.reservationFilter)
      .subscribe(res => (this.roomDayStoreService.reservations = res.body));
  }

  get reservationFilter() {
    return {
      "checkInDate.greaterThen": moment().format('YYYY-MM-DD HH:mm:ss'),
    }
  }

  loadRooms() {
    this.roomService
      .getAll(this.roomFilter)
      .subscribe(res => (this.roomDayStoreService.rooms = res.body));
  }

  get roomFilter() {
    return {

    }
  }
}
