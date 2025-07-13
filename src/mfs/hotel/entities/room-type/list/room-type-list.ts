import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {RoomTypeModel} from '../models/room-type.model';
import {RoomTypeService} from '../services/room-type.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

@Component({
  imports: [MfList, RootSharedModule],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class RoomTypeList extends EntityListPage<RoomTypeModel> {
  title = 'room-types';

  constructor(
    readonly amenityService: RoomTypeService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new RoomTypeModel(), activatedRoute);
  }
}
