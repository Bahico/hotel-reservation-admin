import {Component, computed, effect, inject, input, OnDestroy, signal} from '@angular/core';
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
  private readonly destroy$: Subject<void> = new Subject();

  day = input.required<Date>();
  room = input.required<RoomModel>();

  reservations = signal<ReservationModel[]>([]);
  reservation = computed(() =>
    this.reservations()
      .find(reservation =>
        reservation.room.id === this.room().id &&
        (reservation.checkInDate <= this.day() && this.day() <= reservation.checkOutDate)
      )
  );

  constructor() {
    effect(() => {
      this.roomDayStoreService
        .reservationsFilter$(this.room().id)
        .pipe(takeUntil(this.destroy$))
        .subscribe(res => this.reservations.set(res))
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
