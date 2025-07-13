import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AccountService } from './account.service';
import { map } from 'rxjs/operators';
import { catchError, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AccountService);
  const router = inject(Router);

  return authService.account
    .pipe(
      map(account => {
        console.log(account);
        if (account) {
          return true; // Allow navigation
        } else {
          return router.parseUrl('/authorization/login'); // Redirect to login page
        }
      }),
      catchError(() => {
        router.navigateByUrl('/authorization/login')
        return of(false); // Redirect to login page
      })
    );
};
