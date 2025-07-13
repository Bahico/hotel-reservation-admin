import {Component} from '@angular/core';
import {MfFormComponent} from '@components/components';
import {EntityFormPage} from '@components/pages';
import {ReservationModel} from 'hotel/entities/reservation/models/reservation.model';
import {ReservationService} from '../services/reservation.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  template: `
    <mf-form [title]="title | translate" [formPage]="this"/>`,
  imports: [MfFormComponent, TranslatePipe]
})
export class ReservationUpdate extends EntityFormPage<ReservationModel> {
  override title = 'reservations';

  constructor(
    readonly reservationService: ReservationService,
  ) {
    super(reservationService, new ReservationModel());
  }
}
