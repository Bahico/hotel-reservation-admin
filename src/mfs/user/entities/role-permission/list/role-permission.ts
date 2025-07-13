import { Component } from '@angular/core';
import { RolePermissionService } from '../services/role-permission.service';
import { ActivatedRoute } from '@angular/router';
import { RolePermissionModel } from '../models/role-permission.model';
import { MfList } from '@components/components';
import { EntityListPage } from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';

@Component({
  selector: 'role-permission',
  template: `<mf-list [page]="this" />`,
  imports: [MfList, RootSharedModule],
})
export default class RolePermission extends EntityListPage<RolePermissionModel> {
  title = 'rolePermission';

  constructor(
    readonly rolePermissionService: RolePermissionService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(rolePermissionService, new RolePermissionModel(), activatedRoute);
  }
}
