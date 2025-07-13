import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import {HotelModel} from '../models/hotel.model';

@Injectable({providedIn: 'root'})
export class HotelService extends BaseClientCrudService<HotelModel> {
  listModification =  'hotel';

  constructor() {
    super(new HotelModel(), 'api/hotels', 'hotelms');
  }
}
