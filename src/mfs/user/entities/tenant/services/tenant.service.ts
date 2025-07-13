import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { TenantModel } from '../models/tenant.model';

@Injectable({ providedIn: 'root' })
export class TenantService extends BaseClientCrudService<TenantModel> {
  listModification = 'tenants';

  constructor() {
    super(new TenantModel(), 'api/tenants', 'userms');
  }
}
