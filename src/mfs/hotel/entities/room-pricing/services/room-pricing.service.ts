import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {RoomPricingModel} from '../models/room-pricing.model';

@Injectable()
export class RoomPricingService extends BaseClientCrudService<RoomPricingModel> {
  listModification =  'room-pricing';

  constructor() {
    super(new RoomPricingModel(), 'api/room-pricings', 'hotelms');
  }
}
