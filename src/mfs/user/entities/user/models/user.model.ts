import {Display, Editable, Identification, LengthSize, MinLength, Relation, Required} from '@components/decorators';
import {TenantService} from '../../tenant/services/tenant.service';
import {TenantModel} from '../../tenant/models/tenant.model';
import {NotUpdatable} from '@components/decorators/validators/not-updatable';
import {SetComponents} from '@components/decorators/validators/set-components';
import {UserPasswordInput} from 'user/entities/user/update/password/user-password';

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
  @NotUpdatable
  login: string;

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
  @Required
  activated: boolean;

  /**
   *
   */
  @Editable()
  @MinLength(4)
  @SetComponents({form: UserPasswordInput})
  password: string;
}
