import { Component } from '@angular/core';
import { TenantService } from '../services/tenant.service';
import { ActivatedRoute } from '@angular/router';
import { TenantModel } from '../models/tenant.model';
import { MfList } from '@components/components';
import { EntityListPage } from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';

@Component({
  selector: 'tenant',
  template: `<mf-list [page]="this" />`,
  imports: [MfList, RootSharedModule],
})
export default class Tenant extends EntityListPage<TenantModel> {
  title = 'tenant';

  constructor(
    readonly tenantService: TenantService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(tenantService, new TenantModel(), activatedRoute);
  }
}
