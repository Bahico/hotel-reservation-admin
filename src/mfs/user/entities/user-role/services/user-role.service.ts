import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { UserRoleModel } from '../models/user-role.model';

@Injectable({ providedIn: 'root' })
export class UserRoleService extends BaseClientCrudService<UserRoleModel> {
  listModification = 'userRoles';

  constructor() {
    super(new UserRoleModel(), 'api/user-roles', 'userms');
  }
}
