import {
  Component,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { RoomDayStoreService } from './services/room-day-store.service';
import { RoomDay } from './components/room-day/room-day';
import { months } from '../../core/month';
import {ReservationService} from 'hotel/entities/reservation/services/reservation.service';
import moment from 'moment';
import {RoomService} from 'hotel/entities/room/services/room.service';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  templateUrl: 'book-room.html',
  imports: [RoomDay],
  styleUrl: 'book-room.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class BookRoom implements OnInit {
  private readonly roomDayStoreService = inject(RoomDayStoreService);
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
    const days = [];
    const today = new Date();

    for (let i = 1; i <= 20; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay);
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
