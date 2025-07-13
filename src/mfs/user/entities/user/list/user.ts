import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/user.model';
import { MfList } from '@components/components';
import { EntityListPage } from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';

@Component({
  selector: 'user',
  template: `<mf-list [page]="this" />`,
  imports: [RootSharedModule, MfList],
})
export default class User extends EntityListPage<UserModel> {
  title = 'user';

  constructor(
    readonly userService: UserService,
    readonly activatedRoute: ActivatedRoute
  ) {
    super(userService, new UserModel(), activatedRoute);
  }
}
