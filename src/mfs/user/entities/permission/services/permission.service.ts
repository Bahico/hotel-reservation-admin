import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { PermissionModel } from '../models/permission.model';

@Injectable({ providedIn: 'root' })
export class PermissionService extends BaseClientCrudService<PermissionModel> {
  listModification = 'permissions';

  constructor() {
    super(new PermissionModel(), 'api/permissions', 'userms');
  }
}
