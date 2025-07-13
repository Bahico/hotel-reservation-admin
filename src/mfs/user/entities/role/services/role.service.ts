import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { RoleModel } from '../models/role.model';

@Injectable({ providedIn: 'root' })
export class RoleService extends BaseClientCrudService<RoleModel> {
  listModification = 'roles';

  constructor() {
    super(new RoleModel(), 'api/roles', 'userms');
  }
}
