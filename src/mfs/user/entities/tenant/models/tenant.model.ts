import {Display, Editable, Identification, Required} from '@components/decorators';

/**
 *
 */
export class TenantModel {
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
