import {Component, inject, model, OnInit, signal, ViewEncapsulation,} from '@angular/core';
import {RoomDayStoreService} from './services/room-day-store.service';
import {RoomDays} from './components/room-days/room-days';
import {months} from '../../core/month';
import {ReservationService} from 'hotel/entities/reservation/services/reservation.service';
import moment from 'moment';
import {RoomService} from 'hotel/entities/room/services/room.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {SelectEntityComponent} from '@components/components';
import {RoomTypeService} from 'hotel/entities/room-type/services/room-type.service';
import {FormsModule} from '@angular/forms';
import {RoomTypeModel} from 'hotel/entities/room-type/models/room-type.model';

@Component({
  templateUrl: 'book-room.html',
  imports: [RoomDays, NzIconDirective, SelectEntityComponent, FormsModule],
  styleUrl: 'book-room.scss',
  encapsulation: ViewEncapsulation.None,
})
export default class BookRoom implements OnInit {
  protected readonly roomDayStoreService = inject(RoomDayStoreService);
  private readonly reservationService = inject(ReservationService);
  private readonly roomService = inject(RoomService);
  protected readonly roomTypeService = inject(RoomTypeService);

  rooms = toSignal(this.roomDayStoreService.rooms$);
  days = toSignal(this.roomDayStoreService.days$);
  months = signal(months);
  currentMonth = signal<number>(1);
  currentYear = signal<number>(2025);
  roomType = model<RoomTypeModel>(null);

  ngOnInit() {
    this.initialDate();
    this.loadReservations();
    this.loadRooms();
  }

  previous() {
    this.createDates(new Date(this.currentYear(), this.currentMonth() - 1, 1));
  }

  next() {
    this.createDates(new Date(this.currentYear(), this.currentMonth() + 1, 1));
  }

  initialDate() {
    const today = new Date();
    this.createDates(today);
  }

  createDates(today: Date) {
    const year = today.getFullYear();
    const month = today.getMonth();
    this.currentMonth.set(month);
    this.currentYear.set(year);

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
      "roomTypeId.equals": this.roomType()?.id
    }
  }
}
