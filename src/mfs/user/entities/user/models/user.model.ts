import { Display, Editable, Identification, LengthSize, MinLength, Relation, Required } from '@components/decorators';
import {RoleService} from '../../role/services/role.service';
import {TenantService} from '../../tenant/services/tenant.service';
import {TenantModel} from '../../tenant/models/tenant.model';
import { RoleModel } from '../../role/models/role.model';

/**
 *
 */
export class UserModel {
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
  @LengthSize(3, 120)
  login: string;

  /**
   *
   */
  @Editable()
  @Required
  @MinLength(4)
  password: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  phoneNumber: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  @LengthSize(1, 120)
  firstName: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  @LengthSize(1, 120)
  lastName: string;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  email: string;

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
  langKey: string;

  /**
   *
   */
  @Display()
  @Editable()
  imageUrl: string;

  /**
   *
   */
  @Relation({
    service: TenantService,
    label: 'name'
  })
  @Display()
  @Editable()
  tenant: TenantModel;

  // @Relation({
  //   service: RoleService,
  //   label: 'name',
  //   multi: true
  // })
  // @Display()
  // @Editable()
  // authorities: RoleModel[];

  /**
   *
   */
  @Display()
  @Editable()
  isDeleted: boolean;

  /**
   *
   */
  @Display()
  @Editable()
  @Required
  activated: boolean;
}
