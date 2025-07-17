import {Component, computed, inject, input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {RoomDayStoreService} from 'hotel/entities/book-room/services/room-day-store.service';
import {RoomModel} from 'hotel/entities/room/models/room.model';

@Component({
  templateUrl: 'room-day.html',
  styleUrl: 'room-day.scss',
  selector: 'room-day',
})
export class RoomDay {
  private readonly roomDayStoreService = inject(RoomDayStoreService);

  day = input.required<Date>();
  room = input.required<RoomModel>();

  reservations = toSignal(this.roomDayStoreService.reservationsFilter$(this.room().id))
  reservation = computed(() =>
    this.reservations()
      .find(reservation =>
        reservation.room.id === this.room().id &&
        (reservation.checkInDate <= this.day() && this.day() <= reservation.checkOutDate)
      )
  );
}
