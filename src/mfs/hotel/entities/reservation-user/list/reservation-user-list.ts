import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {ReservationUserModel} from '../models/reservation-user.model';
import {ReservationUserService} from '../services/reservation-user.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

@Component({
  imports: [MfList, RootSharedModule],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class ReservationUserList extends EntityListPage<ReservationUserModel> {
  title = 'reservation-users';

  constructor(
    readonly amenityService: ReservationUserService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new ReservationUserModel(), activatedRoute);
  }
}
