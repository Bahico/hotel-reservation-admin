import {Routes} from '@angular/router';

export default [
  {
    path: 'organizations',
    loadComponent: () => import('./entities/organization/list/organization-list.component'),
  }
] satisfies Routes;
