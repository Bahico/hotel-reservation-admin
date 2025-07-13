import {Routes} from '@angular/router';

export default [
  {
    path: 'positions',
    loadComponent: () => import('./entities/position/list/position-list.component').then(m => m.PositionListComponent),
  }
] satisfies Routes;
