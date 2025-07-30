import {
  Display,
  Editable,
  Email,
  Identification,
  MaxLength,
  Relation,
  Required,
  Size,
  Span
} from '@components/decorators';
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
  @Display
  @Editable
  @Required
  inn: number;

  /**
   *
   */
  @Display
  @Editable
  @Required
  @Size(3, 100)
  name: string;

  /**
   *
   */
  @Display
  @Editable
  @MaxLength(5000)
  description: string;

  /**
   *
   */
  @Display
  @Editable
  @Required
  registrationNumber: string;

  /**
   *
   */
  @Display
  @Span(0)
  tenantId: string;

  /**
   *
   */
  @Display
  @Editable
  @Email
  @Required
  email: string;

  /**
   *
   */
  @Display
  @Editable
  phoneNumber: string;

  /**
   *
   */
  @Display
  @Editable
  @MaxLength(255)
  address: string;

  /**
   *
   */
  @Relation({
    service: OrganizationService,
    label: 'name',
    key: 'id'
  })
  @Display
  @Editable
  parentId: number;

  /**
   *
   */
  @Display
  @Editable
  @Span(12)
  isActive: boolean;
}
