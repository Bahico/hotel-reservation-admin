import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {ReservationModel} from '../models/reservation.model';
import {ReservationService} from '../services/reservation.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';
import {ReservationUpdate} from 'hotel/entities/reservation/update/reservation-update';

@Component({
  imports: [MfList],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class ReservationList extends EntityListPage<ReservationModel> {
  title = 'reservations';

  override formComponent = ReservationUpdate;

  constructor(
    readonly amenityService: ReservationService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new ReservationModel(), activatedRoute);
  }
}
