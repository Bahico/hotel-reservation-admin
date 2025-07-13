import { Component } from '@angular/core';
import { PermissionService } from '../services/permission.service';
import { ActivatedRoute } from '@angular/router';
import { PermissionModel } from '../models/permission.model';
import { MfList } from '@components/components';
import { EntityListPage } from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';

@Component({
  selector: 'permission',
  template: `<mf-list [page]="this" />`,
  imports: [MfList, RootSharedModule],
})
export default class Permission extends EntityListPage<PermissionModel> {
  title = 'permission';

  constructor(
    readonly permissionService: PermissionService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(permissionService, new PermissionModel(), activatedRoute);
  }
}
