import { DashboardItem } from '@components/models';

export default [
  {
    name: 'Profile',
    children:[
      {
        name: 'My profile',
        route: 'profile/my-profile'
      },
      {
        name: 'Security',
        route: 'profile/security'
      },
    ]
  }
] satisfies DashboardItem[];
