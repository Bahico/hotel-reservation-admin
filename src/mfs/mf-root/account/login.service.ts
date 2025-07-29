import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetEndpoint } from '@components/config';
import { TokenModel } from './token/token.model';
import { TokenService } from './token/token.service';
import { AccountService } from './account/account.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private readonly accountService = inject(AccountService);
  private readonly tokenService = inject(TokenService);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly getEndpoint = inject(GetEndpoint);

  private readonly resourceUrl = this.getEndpoint.getEndPoint('api/authenticate', 'userms');

  login(username: string, password: string) {
    this.http
      .post<TokenModel>(this.resourceUrl, { username, password })
      .subscribe(data => {
        this.tokenService.tokenData = data;
        this.router.navigate(['/']);
      });
  }

  logout() {
    this.tokenService.tokenData = null;
    this.router.navigateByUrl('/authorization/login');
    this.accountService.logout();
  }
}
