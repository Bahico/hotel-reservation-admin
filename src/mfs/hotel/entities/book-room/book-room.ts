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

@Component({
  templateUrl: 'book-room.html',
  imports: [RoomDay],
  styleUrl: 'book-room.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export default class BookRoom implements OnInit {
  private readonly roomDayStoreService = inject(RoomDayStoreService);
  private readonly reservationService = inject(ReservationService);

  rooms = Array.from({ length: 10 }, (_, i) => i + 1);
  days = signal<Date[]>([]);
  months = signal(months);

  ngOnInit() {
    this.createDates();
    this.loadReservations();
  }

  createDates() {
    const days = [];
    const today = new Date();

    for (let i = 1; i <= 20; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      days.push(nextDay);
    }

    this.days.set(days);
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
}
