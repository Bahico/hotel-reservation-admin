import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetEndpoint} from '@components/config';
import {UserModel} from 'user/entities/user/models/user.model';

@Injectable({
  providedIn: "root"
})
export class SecurityService {
  protected readonly getEndpoint = inject(GetEndpoint);
  constructor(private http: HttpClient) {}

  changePassword(data: {password: string; login: string}): Observable<UserModel> {
    return this.http.post<UserModel>(this.getEndpoint.getEndPoint('api/account/change-password-with-login', 'userms'), data);
  }
}
