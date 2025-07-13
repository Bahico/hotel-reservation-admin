import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { RolePermissionModel } from '../models/role-permission.model';

@Injectable({ providedIn: 'root' })
export class RolePermissionService extends BaseClientCrudService<RolePermissionModel> {
  listModification = 'role-permissions';

  constructor() {
    super(new RolePermissionModel(), 'api/role-permissions', 'userms');
  }
}
