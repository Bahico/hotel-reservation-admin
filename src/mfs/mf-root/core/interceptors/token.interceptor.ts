import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { inject } from '@angular/core';
import { TokenService } from '@components/account';

export default function (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const tokenService = inject(TokenService);

  if (tokenService.token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${tokenService.token}`
      },
    })
  }

  return next(req);
}
