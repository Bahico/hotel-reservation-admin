import {Routes} from '@angular/router';
import {Profile} from "./profile/profile";
import {MyProfile} from './entities/my-profile/my-profile'
import {Security} from './entities/security/security';


export default [
    {
        path: '',
        component: Profile

    },
    {
        path: 'settings',
        component: MyProfile
    },
  {
    path: 'security',
    component: Security
  },
] satisfies Routes;
