import {Display, Editable, Email, Identification, MaxLength, Relation, Required, Size} from '@components/decorators';
import {OrganizationService} from 'organization/entities/organization/services/organization.service';

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
  @Relation({
    service: OrganizationService,
    label: 'number',
    key: 'id'
  })
  parentId: number;

  /**
   *
   */
  @Display()
  @Editable()
  isActive: boolean;
}
