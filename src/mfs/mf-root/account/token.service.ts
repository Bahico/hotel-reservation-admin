import { Injectable } from '@angular/core';
import { TokenModel } from './token.model';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private token$: string;
  private refreshToken$: string;

  get token() {
    if (!this.token$) {
      this.token$ = localStorage.getItem('id_token');
    }
    return this.token$;
  }

  get refreshToken() {
    if (!this.refreshToken$) {
      this.refreshToken$ = localStorage.getItem('refresh_token');
    }
    return this.refreshToken$;
  }

  set tokenData(token: TokenModel) {
    if (!token) {
      localStorage.removeItem('id_token');
      localStorage.removeItem('refresh_token');
      this.token$ = null;
      this.refreshToken$ = null;
    } else {
      localStorage.setItem('id_token', token.id_token);
      localStorage.setItem('refresh_token', token.refresh_token);
      this.token$ = token.id_token;
      this.refreshToken$ = token.refresh_token;
    }
  }
}
