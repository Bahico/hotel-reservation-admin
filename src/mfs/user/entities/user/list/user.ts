import {AfterViewInit, Component} from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/user.model';
import { MfList } from '@components/components';
import { EntityListPage } from '@components/pages';
import { RootSharedModule } from '@components/root-shared.module';
import {TranslateRegisterr} from '@components/i18n';
import {UserTranslate} from 'user/translates';
import {UserForm} from 'user/entities/user/form/user-form';

@Component({
  selector: 'user',
  template: `<mf-list [page]="this" />`,
  imports: [RootSharedModule, MfList],
})
export default class User extends EntityListPage<UserModel> implements AfterViewInit {
  title = 'user';

  constructor(
    readonly userService: UserService,
    readonly activatedRoute: ActivatedRoute,
    private readonly translateRegister: TranslateRegisterr
  ) {
    super(userService, new UserModel(), activatedRoute);
  }

  override formComponent = UserForm

  ngAfterViewInit() {
    this.translateRegister.register(UserTranslate);
  }
}
