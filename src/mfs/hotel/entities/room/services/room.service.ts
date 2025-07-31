import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {RoomModel} from '../models/room.model';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RoomService extends BaseClientCrudService<RoomModel> {
  listModification =  'room';

  uploadImageUrl( id: number, file: any ): Observable<any> {
    return this.http.post(this.resourceUrl + '/' + `upload-url/${id}`, file)
  }
  postFile(url: string, file: any): Observable<any> {
    const blob = new Blob([file], {type: file.type || 'application/octet-stream'});

    return this.http.put(url, blob, {
      headers: {
        'Content-Type': file.type || 'application/octet-stream',
        'X-Skip-Auth': 'true'
      }
    });
  }
  constructor() {
    super(new RoomModel(), 'api/rooms', 'hotelms');
  }
}
