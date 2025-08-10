import {Display, Editable, Identification, LengthSize, Required} from '@components/decorators';

/**
 *
 */
export class RatePlanPriceRoomTypeModel {
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
  name: string;

  /**
   *
   */
  @Display
  @Editable
  @Required
  roomTypeId: number;
}
