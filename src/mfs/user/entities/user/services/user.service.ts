import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseClientCrudService<UserModel> {
  listModification = 'users';

  constructor() {
    super(new UserModel(), 'api/users', 'userms');
  }
}
