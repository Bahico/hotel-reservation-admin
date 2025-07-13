import { Component } from "@angular/core";
import {EntityListPage} from '@components/pages';
import {RoomInventoryModel} from '../models/room-inventory.model';
import {RoomInventoryService} from '../services/room-inventory.service';
import {ActivatedRoute} from '@angular/router';
import {MfList} from '@components/components';
import {RootSharedModule} from '@components/root-shared.module';

@Component({
  imports: [MfList, RootSharedModule],
  providers: [RoomInventoryService],
  template: `
    <mf-list [page]="this"/>
  `
})
export default class RoomInventoryList extends EntityListPage<RoomInventoryModel> {
  title = 'room-inventories';

  constructor(
    readonly amenityService: RoomInventoryService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(amenityService, new RoomInventoryModel(), activatedRoute);
  }
}
