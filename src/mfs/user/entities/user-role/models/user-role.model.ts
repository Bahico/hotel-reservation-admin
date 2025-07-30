import {Display, Editable, Identification, Relation} from '@components/decorators';
import {RoleModel} from '../../role/models/role.model';
import {RoleService} from '../../role/services/role.service';
import {UserModel} from '../../user/models/user.model';
import {UserService} from '../../user/services/user.service';

/**
 *
 */
export class UserRoleModel {
  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Relation({
    service: RoleService,
    label: 'number'
  })
  @Display
  @Editable
  role: RoleModel;

  /**
   *
   */
  @Relation({
    service: UserService,
    label: 'number'
  })
  @Display
  @Editable
  user: UserModel;
}
