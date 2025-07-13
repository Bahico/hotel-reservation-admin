import {Routes} from '@angular/router';

export default [
  {
    path: 'users',
    loadComponent: () => import('./entities/user/list/user')
  },
  {
    path: 'user-roles',
    loadComponent: () => import('./entities/user-role/list/user-role')
  },
  {
    path: 'permissions',
    loadComponent: () => import('./entities/permission/list/permission')
  },
  {
    path: 'roles',
    loadComponent: () => import('./entities/role/list/role')
  },
  {
    path: 'tenants',
    loadComponent: () => import('./entities/tenant/list/tenant')
  },
  {
    path: 'role-permissions',
    loadComponent: () => import('./entities/role-permission/list/role-permission')
  },
] satisfies Routes;
