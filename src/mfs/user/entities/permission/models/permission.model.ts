import {Display, Editable, Identification, Required} from '@components/decorators';

/**
 *
 */
export class PermissionModel {
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
