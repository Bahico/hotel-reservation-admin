import {Route} from '@angular/router';
import { authGuard } from '@components/account';

export default {
  path: 'dashboard',
  loadComponent: () => import('./dashboard'),
  canActivate: [authGuard],
  children: [
    {
      path: 'profile',
      loadChildren: () => import('profile'),
    },
    {
      path: 'staff',
      loadChildren: () => import('staff/routes'),
    },
    {
      path: 'organization',
      loadChildren: () => import('organization/routes'),
    },
    {
      path: 'hotel',
      loadChildren: () => import('hotel/routes'),
    },
    {
      path: 'user',
      loadChildren: () => import('user/routes'),
    },
    {
      path: 'rate-plan',
      loadChildren: () => import('rate-plan/routes'),
    },
  ]
} satisfies Route;
