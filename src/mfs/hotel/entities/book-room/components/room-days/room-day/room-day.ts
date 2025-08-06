import {Component, computed, effect, inject, input, OnDestroy, output, signal} from '@angular/core';
import {RoomDayStoreService} from 'hotel/entities/book-room/services/room-day-store.service';
import {RoomModel} from 'hotel/entities/room/models/room.model';
import {ReservationModel} from 'hotel/entities/reservation/models/reservation.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  templateUrl: 'room-day.html',
  styleUrl: 'room-day.scss',
  selector: 'room-day',
})
export class RoomDay implements OnDestroy {
  private readonly roomDayStoreService = inject(RoomDayStoreService);
  private readonly destroy$ = new Subject<void>();

  day = input.required<Date>();
  room = input.required<RoomModel>();
  first = input.required<boolean>();

  updateReservation = output<ReservationModel>();

  reservation = signal<ReservationModel | null>(null);
  startReservation = signal<ReservationModel | null>(null);

  isStart = computed(() => this.reservation()?.checkInDate?.getDay() === this.day().getDay());
  isEnd = computed(() => this.reservation()?.checkOutDate?.getDay() === this.day().getDay());
  startDay = computed(() => {
    const date = this.day();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  });
  endDay = computed(() => {
    const date = this.day();
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
  })


  constructor() {
    effect(() => {
      this.roomDayStoreService
        .reservationsFilter$(this.room().id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => {
          this.startReservation.set(null);
          this.reservation.set(null);

          const currentFullDay = this.getFullDay(this.day())
          for (const reservation of res) {
            if (reservation.room.id === this.room().id) {
              console.log(reservation);

              if (this.getFullDay(reservation.checkInDate) === currentFullDay) {
                this.startReservation.set(reservation);
              } else if (reservation.checkInDate <= this.endDay() && this.startDay() <= reservation.checkOutDate) {
                this.reservation.set(reservation)
              }

            }
          }
        })
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getFullDay(date: Date) {
    return [date.getFullYear(), date.getMonth(), date.getDate()].join('-');
  }
}
