import { inject, Injectable } from '@angular/core';
import { AccountModel } from './account.model';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetEndpoint } from '@components/config';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private readonly http = inject(HttpClient);
  private readonly getEndpoint = inject(GetEndpoint);

  private readonly resourceUrl = this.getEndpoint.getEndPoint('api/account', 'userms');
  private account$ = new BehaviorSubject<AccountModel>(null);

  get account() {
    if (this.account$.value) {
      return this.account$.asObservable();
    }

    return this.http.get<AccountModel>(this.resourceUrl)
      .pipe(
        tap(data => this.account$.next(data))
      );
  }

  getAccount() {
    return this.account$.value;
  }

  logout() {
    this.account$.next(null);
  }
}
