import {Display, Editable, Identification, LengthSize, Relation, Required} from '@components/decorators';
import {
  BookingConfirmationService
} from 'rate-plan/entities/booking-confirmation/services/booking-confirmation.service';
import {BookingConfirmationModel} from 'rate-plan/entities/booking-confirmation/models/booking-confirmation.model';

/**
 *
 */
export class CustomerInformationModel {
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
  @LengthSize(1, 250)
  @Required
  firstName: string;

  /**
   *
   */
  @Display
  @Editable
  @LengthSize(1, 250)
  @Required
  lastName: string;

  /**
   *
   */
  @Display
  @Editable
  @LengthSize(1, 120)
  @Required
  country: string;

  /**
   *
   */
  @Display
  @Editable
  @LengthSize(1, 250)
  @Required
  email: string;

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
