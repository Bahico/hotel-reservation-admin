 import {Display, Editable, Identification, Required, Size, Span} from '@components/decorators';

/**
 *
 */
export class HotelModel {
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
  @Span(12)
  @Required
  @Size(1, 3000)
  address: string;
}
