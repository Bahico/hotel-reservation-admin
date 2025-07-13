import { Component } from '@angular/core';
import { RoleService } from '../services/role.service';
import { ActivatedRoute } from '@angular/router';
import { RoleModel } from '../models/role.model';
import { MfList } from '@components/components';
import { EntityListPage } from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';

@Component({
  selector: 'role',
  template: `<mf-list [page]="this" />`,
  imports: [MfList, RootSharedModule],
})
export default class Role extends EntityListPage<RoleModel> {
  title = 'role';

  constructor(
    readonly roleService: RoleService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(roleService, new RoleModel(), activatedRoute);
  }
}
