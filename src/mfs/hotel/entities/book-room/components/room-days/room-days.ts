import {Component, HostListener, inject, input} from '@angular/core';
import {RoomDayStoreService} from '../../services/room-day-store.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {ReservationModel} from '../../../reservation/models/reservation.model';
import {EntityService, EntityUpdateOptions} from '@components/components';
import {EntityFormPage} from '@components/pages';
import {ReservationUpdate} from 'hotel/entities/reservation/update/reservation-update';
import {RoomModel} from 'hotel/entities/room/models/room.model';
import {filter} from 'rxjs/operators';
import {RoomDay} from 'hotel/entities/book-room/components/room-days/room-day/room-day';

@Component({
  templateUrl: 'room-days.html',
  styleUrl: 'room-days.scss',
  selector: 'room-days',
  imports: [
    RoomDay
  ]
})
export class RoomDays {
  private readonly roomDayStoreService = inject(RoomDayStoreService);
  protected readonly entityService = inject(EntityService);

  room = input.required<RoomModel>();

  days = toSignal(this.roomDayStoreService.days$);

  isMouseDown = false;
  startDay: Date;
  endDay: Date;

  @HostListener('mouseleave')
  onMouseLeave() {
    this.onMouseUp();
  }

  onMouseDown(day: Date, dayRef: RoomDay) {
    if (!dayRef.reservation() || (!dayRef.isStart() && dayRef.isEnd())) {
      this.isMouseDown = true;
      this.startDay = day;
      this.endDay = day;
    }
  }

  onMouseEnter(day: Date, dayRef: RoomDay) {
    if (dayRef.reservation() && (!dayRef.isStart() || dayRef.isEnd()))  {
      this.isMouseDown = false;
      this.startDay = null;
      this.endDay = null;
      return;
    }

    if (this.isMouseDown) {
      this.endDay = day;
    }
  }

  onMouseUp() {
    this.isMouseDown = false;

    if (this.startDay && this.endDay && this.startDay.getDay() !== this.endDay.getDay()) {
      this.addReservation();
    } else {
      this.startDay = null;
      this.endDay = null;
    }
  }

  isSelected(day: Date): boolean {
    if (this.startDay === null || this.endDay === null) return false;

    const [min, max] = [this.startDay, this.endDay].sort((a, b) => a > b ? 1 : -1);
    return day >= min && day <= max;
  }

  addReservation() {
    let checkInDate: Date;
    let checkOutDate: Date;
    if (this.startDay > this.endDay) {
      checkInDate = this.endDay;
      checkOutDate = this.startDay;
    } else {
      checkInDate = this.startDay;
      checkOutDate = this.endDay;
    }

    const modalRef = this.openForm({
      checkInDate,
      checkOutDate,
      room: this.room()
    });

    this.startDay = null;
    this.endDay = null;


    modalRef
      .afterClose
      .pipe(filter(res => !!res))
      .subscribe(res => {
        this.roomDayStoreService.addReservation = res
      })
  }

  updateReservation(reservation: ReservationModel) {
    const modalRef = this.openForm(reservation);

    modalRef
      .afterClose
      .pipe(filter(res => !!res))
      .subscribe(res => {
        const index = this.roomDayStoreService.getIndexReservation(reservation);
        this.roomDayStoreService.editReservation(res, index);
      })
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
