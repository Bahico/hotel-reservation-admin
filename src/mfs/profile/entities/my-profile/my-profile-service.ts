import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccountModel} from '@components/account';
import {GetEndpoint} from '@components/config';

@Injectable({
  providedIn: "root"
})
export class MyProfileService {
  protected readonly getEndpoint = inject(GetEndpoint);
  constructor(private http: HttpClient) {}

   editProfile(acc) : Observable<AccountModel> {
     return this.http.put<AccountModel>(this.getEndpoint.getEndPoint('api/users/update', 'userms'), acc);
   }
}
