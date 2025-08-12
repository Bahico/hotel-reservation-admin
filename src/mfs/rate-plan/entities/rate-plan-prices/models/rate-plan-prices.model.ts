import {Display, Editable, Identification, Relation, Required} from '@components/decorators';
import {CurrencyService} from 'rate-plan/entities/currency/services/currency.service';
import {CurrencyModel} from 'rate-plan/entities/currency/models/currency.model';
import {
  RatePlanPriceRoomTypeModel
} from 'rate-plan/entities/rate-plan-price-room-type/models/rate-plan-price-room-type.model';
import {
  RatePlanPriceRoomTypeService
} from 'rate-plan/entities/rate-plan-price-room-type/services/rate-plan-price-room-type.service';
import {RatePlanModel} from 'rate-plan/entities/rate-plan/models/rate-plan.model';
import {RatePlanService} from 'rate-plan/entities/rate-plan/services/rate-plan.service';

/**
 *
 */
export class RatePlanPricesModel {
  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  guestCount: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  rate: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  startDate: Date;

  /**
   *
   */
  @Display
  @Editable
  @Required
  endDate: Date;

  /**
   *
   */
  @Display
  @Editable
  @Required
  extraGuest: number;

  /**
   *
   */
  @Relation({
    service: CurrencyService,
    label: 'name'
  })
  @Display
  @Editable
  currency: CurrencyModel;

  /**
   *
   */
  @Relation({
    service: RatePlanPriceRoomTypeService,
    label: 'name'
  })
  @Display
  @Editable
  roomType: RatePlanPriceRoomTypeModel;

  /**
   *
   */
  @Relation({
    service: RatePlanService,
    label: 'name'
  })
  @Display
  @Editable
  ratePlan: RatePlanModel;
}
