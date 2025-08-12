import {Routes} from '@angular/router';

export default [
  {
    path: 'booking-confirmations',
    loadComponent: () => import('./entities/booking-confirmation/list/booking-confirmation')
  },
  {
    path: 'booking-costs',
    loadComponent: () => import('./entities/booking-cost/list/booking-cost')
  },
  {
    path: 'cancellation-policies',
    loadComponent: () => import('./entities/cancellation-policy/list/cancellation-policy')
  },
  {
    path: 'currencies',
    loadComponent: () => import('./entities/currency/list/currency')
  },
  {
    path: 'customer-information',
    loadComponent: () => import('./entities/customer-information/list/customer-information')
  },
  {
    path: 'extra-services',
    loadComponent: () => import('./entities/extra-service/list/extra-service')
  },
  {
    path: 'extra-service-groups',
    loadComponent: () => import('./entities/extra-service-group/list/extra-service-group')
  },
  {
    path: 'penalties',
    loadComponent: () => import('./entities/penalty/list/penalty')
  },
  {
    path: 'rate-plans',
    loadChildren: () => import('./entities/rate-plan/routes')
  },
  {
    path: 'rate-plan-price-room-types',
    loadComponent: () => import('./entities/rate-plan-price-room-type/list/rate-plan-price-room-type')
  },
  {
    path: 'rate-plan-prices',
    loadComponent: () => import('./entities/rate-plan-prices/list/rate-plan-prices')
  },
  {
    path: 'rate-plan-rules',
    loadComponent: () => import('./entities/rate-plan-rule/list/rate-plan-rule')
  },
  {
    path: 'rate-plan-rule-settings',
    loadComponent: () => import('./entities/rate-plan-rule-setting/list/rate-plan-rule-setting')
  },
  {
    path: 'currencies',
    loadComponent: () => import('./entities/rate-plan/list/rate-plan')
  },
] satisfies Routes;
