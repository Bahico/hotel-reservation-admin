import {Routes} from '@angular/router';
import {ratePlanResolver} from 'rate-plan/entities/rate-plan/services/rate-plan.resolver';
import {DrawRectangleComponent} from 'rate-plan/entities/rate-plan/draw-rectangle/draw-rectangle';

export default [
  {
    path: '',
    loadComponent: () => import('./list/rate-plan')
  },
  {
    path: 'test',
    component: DrawRectangleComponent
  },
  {
    path: ':id',
    loadComponent: () => import('./detail/rate-plan-detail'),
    resolve: {
      ratePlan: ratePlanResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'prices',
        pathMatch: 'full',
      },
      {
        path: 'prices',
        loadComponent: () => import('./detail/pages/price/rate-plan-price')
      }
    ]
  },
] satisfies Routes;
