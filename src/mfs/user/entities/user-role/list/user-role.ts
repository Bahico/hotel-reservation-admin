import {Component} from '@angular/core';
import {UserRoleService} from '../services/user-role.service';
import {ActivatedRoute} from '@angular/router';
import {UserRoleModel} from '../models/user-role.model';
import {MfList} from '@components/components';
import {EntityListPage} from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';

@Component({
  selector: 'user-role',
  template: `<mf-list [page]="this" />`,
  imports: [MfList, RootSharedModule],
})
export default class UserRole extends EntityListPage<UserRoleModel> {
  title = 'userRole';

  constructor(
    readonly userRoleService: UserRoleService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(userRoleService, new UserRoleModel(), activatedRoute);
  }
}
