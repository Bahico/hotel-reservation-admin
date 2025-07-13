import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {RoomInventoryModel} from '../models/room-inventory.model';

@Injectable()
export class RoomInventoryService extends BaseClientCrudService<RoomInventoryModel> {
  listModification =  'room-inventory';

  constructor() {
    super(new RoomInventoryModel(), 'api/room-inventories', 'hotelms');
  }
}
