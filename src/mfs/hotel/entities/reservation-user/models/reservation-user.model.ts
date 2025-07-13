import {Display, Editable, Identification, Required} from '@components/decorators';

/**
 *
 */
export class ReservationUserModel {

  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  name: string;
}
