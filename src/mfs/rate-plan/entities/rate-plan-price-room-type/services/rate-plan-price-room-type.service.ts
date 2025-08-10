import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services';
import { RatePlanPriceRoomTypeModel } from '../models/rate-plan-price-room-type.model';

@Injectable({providedIn: 'root'})
export class RatePlanPriceRoomTypeService extends BaseClientCrudService<RatePlanPriceRoomTypeModel> {
  listModification = 'rate-plan-price-room-types';

  constructor() {
    super(new RatePlanPriceRoomTypeModel(), 'api/rate-plan-price-room-types', 'rateplanms');
  }
}
