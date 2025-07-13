import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {RoomModel} from '../models/room.model';
import {RoomService} from '../services/room.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

@Component({
  imports: [MfList, RootSharedModule],
  providers: [RoomService],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class RoomList extends EntityListPage<RoomModel> {
  title = 'rooms';

  constructor(
    readonly amenityService: RoomService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new RoomModel(), activatedRoute);
  }
}
