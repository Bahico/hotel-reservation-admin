import {Display, Editable, EditableEnum, Identification, Relation, Required} from '@components/decorators';
import {PaymentMethod} from './payment.method';
import {RatePlanPricesService} from 'rate-plan/entities/rate-plan-prices/services/rate-plan-prices.service';
import {RatePlanPricesModel} from 'rate-plan/entities/rate-plan-prices/models/rate-plan-prices.model';
import {PenaltyService} from 'rate-plan/entities/penalty/services/penalty.service';
import {PenaltyModel} from 'rate-plan/entities/penalty/models/penalty.model';
import {ExtraServiceService} from 'rate-plan/entities/extra-service/services/extra-service.service';
import {ExtraServiceModel} from 'rate-plan/entities/extra-service/models/extra-service.model';
import {BookingConfirmationModel} from 'rate-plan/entities/booking-confirmation/models/booking-confirmation.model';
import {
  BookingConfirmationService
} from 'rate-plan/entities/booking-confirmation/services/booking-confirmation.service';

/**
 *
 */
export class BookingCostModel {
  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Display
  @EditableEnum(PaymentMethod)
  @Required
  paymentMethod: PaymentMethod;

  /**
   *
   */
  @Display
  @Editable
  discount: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  cost: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  totalCost: number;

  /**
   *
   */
  @Relation({
    service: RatePlanPricesService,
    label: 'guestCount'
  })
  @Display
  @Display
  ratePlanPrice: RatePlanPricesModel;

  /**
   *
   */
  @Relation({
    service: PenaltyService,
    label: 'name',
    multi: true
  })
  @Display
  @Display
  penalties: PenaltyModel[];

  /**
   *
   */
  @Relation({
    service: ExtraServiceService,
    label: 'name',
    multi: true
  })
  @Display
  @Display
  extraServices: ExtraServiceModel[];

  /**
   *
   */
  @Relation({
    service: BookingConfirmationService,
    label: 'hotelName'
  })
  @Display
  @Display
  bookingConfirmation: BookingConfirmationModel;
}
