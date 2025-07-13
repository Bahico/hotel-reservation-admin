import {DashboardItem} from '@components/models';

export default [
  {
    name: 'User management',
    icon: 'user',
    children: [
      {
        name: 'User',
        route: 'user/users'
      },
      {
        name: 'Role',
        route: 'user/roles'
      },
      {
        name: 'Permission',
        route: 'user/permissions'
      },
      {
        name: 'Role permission',
        route: 'user/role-permissions'
      },
      {
        name: 'User role',
        route: 'user/user-roles'
      },
      {
        name: 'Tenant',
        route: 'user/tenants'
      },
    ]
  }
] satisfies DashboardItem[];
