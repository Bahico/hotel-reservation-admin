import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {AmenityModel} from '../models/amenity.model';

@Injectable()
export class AmenityService extends BaseClientCrudService<AmenityModel> {
  listModification =  'amenity';

  constructor() {
    super(new AmenityModel(), 'api/amenities', 'hotelms');
  }
}
