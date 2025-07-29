import { Injectable } from '@angular/core';
import { BaseClientCrudService } from '@components/services';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseClientCrudService<UserModel> {
  listModification = 'users';

  constructor() {
    super(new UserModel(), 'api/users', 'userms');
  }

  override submit(entity: UserModel): Observable<UserModel> {
    if (entity.id) {
      return this.create(entity);
    }
    return super.submit(entity);
  }

  /**
   *
   * @param entity
   */
  create(entity: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.getEndpoint.getEndPoint('api/register', this.microservice), entity);
  }

  changePassword(data: {password: string; login: string}): Observable<UserModel> {
    return this.http.post<UserModel>(this.getEndpoint.getEndPoint('api/account/change-password-with-login', this.microservice), data);
  }
}
