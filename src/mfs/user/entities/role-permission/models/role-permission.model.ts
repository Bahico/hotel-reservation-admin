import {Display, Editable, Identification, Relation} from '@components/decorators';
import {RoleModel} from '../../role/models/role.model';
import {RoleService} from '../../role/services/role.service';
import {PermissionService} from '../../permission/services/permission.service';
import {PermissionModel} from '../../permission/models/permission.model';

/**
 *
 */
export class RolePermissionModel {
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
    label: 'name'
  })
  @Display()
  @Editable()
  role: RoleModel;

  /**
   *
   */
  @Relation({
    service: PermissionService,
    label: 'name'
  })
  @Display()
  @Editable()
  permission: PermissionModel;
}
