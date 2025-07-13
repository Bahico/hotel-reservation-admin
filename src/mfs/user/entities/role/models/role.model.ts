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
  @Display()
  @Editable()
  @Required
  name: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  designedName: string;

  /**
   *
   */
  @Display()
  @Editable()
  isDeleted: boolean;
}
