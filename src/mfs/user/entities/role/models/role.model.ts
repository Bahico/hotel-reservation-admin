import {Display, Editable, Identification, Required} from '@components/decorators';

/**
 *
 */
export class RoleModel {
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
  name: string;
}
