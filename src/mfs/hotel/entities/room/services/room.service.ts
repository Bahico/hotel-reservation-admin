import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {RoomModel} from '../models/room.model';

@Injectable({providedIn: 'root'})
export class RoomService extends BaseClientCrudService<RoomModel> {
  listModification =  'room';

  constructor() {
    super(new RoomModel(), 'api/rooms', 'hotelms');
  }
}
