import { Routes } from '@angular/router';
import dashboardRoutes from './dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  dashboardRoutes,
  {
    path: 'authorization',
    loadChildren: () => import('authorization'),
  },
];
