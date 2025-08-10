import {Display, Editable, EditableEnum, Identification, LengthSize, Relation, Required} from '@components/decorators';
import {PenaltyType} from 'rate-plan/entities/penalty/models/penalty.type';
import {BookingCostService} from 'rate-plan/entities/booking-cost/services/booking-cost.service';
import {BookingCostModel} from 'rate-plan/entities/booking-cost/models/booking-cost.model';

/**
 *
 */
export class PenaltyModel {
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
  @LengthSize(3, 500)
  @Required
  name: string;

  /**
   *
   */
  @Display
  @EditableEnum(PenaltyType)
  @Required
  type: PenaltyType;

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
  @Relation({
    service: BookingCostService,
    label: 'totalCost'
  })
  @Display
  @Editable
  bookingCost: BookingCostModel;
}
