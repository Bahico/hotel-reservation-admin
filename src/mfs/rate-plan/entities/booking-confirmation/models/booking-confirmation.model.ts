import {
  Display,
  Editable,
  Identification,
  LengthSize,
  MaxLength,
  Min,
  Relation,
  Required
} from '@components/decorators';
import {BookingCostModel} from 'rate-plan/entities/booking-cost/models/booking-cost.model';
import {BookingCostService} from 'rate-plan/entities/booking-cost/services/booking-cost.service';
import {CustomerInformationModel} from 'rate-plan/entities/customer-information/models/customer-information.model';
import {
  CustomerInformationService
} from 'rate-plan/entities/customer-information/services/customer-information.service';

/**
 *
 */
export class BookingConfirmationModel {
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
  @LengthSize(3, 250)
  @Required
  hotelName: string;

  /**
   *
   */
  @Display
  @Editable
  @MaxLength(500)
  @Required
  number: string;

  /**
   *
   */
  @Display
  @Editable
  @Min(1)
  @Required
  nights: number;

  /**
   *
   */
  @Display
  @Editable
  @Min(1)
  @Required
  guests: number;

  /**
   *
   */
  @Display
  @Editable
  @Min(1)
  @Required
  rooms: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  arrivalDate: Date;

  /**
   *
   */
  @Display
  @Editable
  @Required
  departureDate: Date;

  /**
   *
   */
  @Display
  @Editable
  @Required
  isPaid: boolean;

  /**
   *
   */
  @Relation({
    service: BookingCostService,
    label: 'totalCost'
  })
  @Display
  @Display
  cost: BookingCostModel;

  /**
   *
   */
  @Relation({
    service: CustomerInformationService,
    label: 'firstName',
    prefix: 'lastName'
  })
  @Display
  @Display
  customerInformation: CustomerInformationModel;
}
