import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {RoomTypeModel} from '../models/room-type.model';

@Injectable({providedIn: 'root'})
export class RoomTypeService extends BaseClientCrudService<RoomTypeModel> {
  listModification =  'room-type';

  constructor() {
    super(new RoomTypeModel(), 'api/room-types', 'hotelms');
  }
}
