import {Display, Editable, Email, Identification, MaxLength, Required, Size} from '@components/decorators';

/**
 *
 */
export class OrganizationModel {

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
  tenantId: number;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  inn: number;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  @Size(3, 100)
  name: string;

  /**
   *
   */
  @Display()
  @Editable()
  @MaxLength(5000)
  description: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  registrationNumber: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Email
  @Required
  email: string;

  /**
   *
   */
  @Display()
  @Editable()
  phoneNumber: string;

  /**
   *
   */
  @Display()
  @Editable()
  @MaxLength(255)
  address: string;

  /**
   *
   */
  @Display()
  @Editable()
  parentId: number;

  /**
   *
   */
  @Display()
  @Editable()
  isActive: boolean;
}
