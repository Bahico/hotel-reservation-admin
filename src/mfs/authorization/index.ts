import { Route } from '@angular/router';
import { Register } from './register';

export default [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', loadComponent: () => import('./login/login') },
  { path: 'register', component: Register }
] satisfies Route[];
