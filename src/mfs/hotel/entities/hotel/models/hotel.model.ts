 import {Display, Editable, Identification, Required, Size} from '@components/decorators';

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
  @Display()
  @Editable(12)
  @Size(1, 500)
  @Required
  name: string;

  /**
   *
   */
  @Display()
  @Editable(12)
  @Required
  @Size(1, 3000)
  address: string;
}
