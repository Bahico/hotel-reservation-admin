import {Routes} from '@angular/router';
import {Profile} from "./profile/profile";
import {MyProfile} from './entities/my-profile/my-profile'


export default [
    {
        path: '',
        component: Profile

    },
    {
        path: 'settings',
        component: MyProfile
    },
] satisfies Routes;
