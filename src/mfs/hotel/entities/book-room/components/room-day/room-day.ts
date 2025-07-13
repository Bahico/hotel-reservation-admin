import {Component, HostListener, inject, input} from '@angular/core';
import {RoomDayStoreService} from '../../services/room-day-store.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ReservationModel} from '../../../reservation/models/reservation.model';
import ReservationList from '../../../reservation/list/reservation-list';
import {EntityService, EntityUpdateOptions} from '@components/components';
import {EntityFormPage} from '@components/pages';
import {ReservationUpdate} from 'hotel/entities/reservation/update/reservation-update';

@Component({
  templateUrl: 'room-day.html',
  styleUrl: 'room-day.scss',
  selector: 'room-day',
})
export class RoomDay {
  private readonly roomDayStoreService = inject(RoomDayStoreService);
  protected readonly entityService = inject(EntityService);

  room = input.required<number>();
  days = input.required<Date[]>();

  reservations = toSignal(this.roomDayStoreService.reservations$);

  isMouseDown = false;
  startDay: Date;
  endDay: Date;

  @HostListener('mouseleave')
  onMouseLeave() {
    this.onMouseUp();
    console.log('Component is inactive (no hover)');
  }

  onMouseDown(day: Date) {
    this.isMouseDown = true;
    this.startDay = day;
    this.endDay = day;
  }

  onMouseEnter(day: Date) {
    if (this.isMouseDown) {
      this.endDay = day;
    }
  }

  onMouseUp() {
    this.isMouseDown = false;

    if (this.startDay && this.endDay) {
      this.addReservation();
    }
  }

  isSelected(day: Date): boolean {
    if (this.startDay === null || this.endDay === null) return false;

    const [min, max] = [this.startDay, this.endDay].sort((a, b) => a > b ? 1 : -1);
    return day >= min && day <= max;
  }

  getPlansForDate(date: Date): ReservationModel[] {
    return this.reservations().filter(reservation => {
      return date >= reservation.checkInDate && date <= reservation.checkOutDate;
    });
  }

  addReservation() {
    this.openForm({
      checkInDate: this.startDay,
      checkOutDate: this.endDay
    });
    this.startDay = null;
    this.endDay = null;
  }

  openForm(reservation: Partial<ReservationModel>, duplicate?: true) {
    const options: EntityUpdateOptions<EntityFormPage<ReservationModel>> = {
      modalOptions: this.entityService.getModalOption(ReservationUpdate),
      componentInstances: {
        data: reservation,
        duplicate: duplicate,
      },
    };

    return this.entityService.update(options);
  }
}
