import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {RoomModel} from '../models/room.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RoomService extends BaseClientCrudService<RoomModel> {
  listModification =  'room';

  uploadImage( id: number, file: any ): Observable<any> {
    return this.http.post(this.getEndpoint.getEndPoint(`api/${id}`, this.microservice), file)
  }

  constructor() {
    super(new RoomModel(), 'api/rooms', 'hotelms');
  }
}
