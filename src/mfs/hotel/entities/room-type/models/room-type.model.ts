import {Display, Editable, Identification, Min, Required, Size, Span} from '@components/decorators';

/**
 *
 */
export class RoomTypeModel {

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
  @Span(12)
  @Size(1, 500)
  @Required
  name: string;

  /**
   *
   */
  @Display
  @Editable
  @Required
  @Min(1)
  numberBeds: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  @Min(1)
  maxOccupancy: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  basePrice: number;
}
