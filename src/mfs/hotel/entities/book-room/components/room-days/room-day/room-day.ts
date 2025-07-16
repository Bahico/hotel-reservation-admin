import {Component, computed, input} from '@angular/core';

@Component({
  templateUrl: 'room-day.html',
  styleUrl: 'room-day.scss',
  selector: 'room-day',
})
export class RoomDay {
  day = input.required<Date>();



  reservation = computed(() => void);
}
