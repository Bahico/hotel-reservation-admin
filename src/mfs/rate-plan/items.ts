import {DashboardItem} from '@components/models';

export default [
  {
    name: 'Rate plan',
    icon: 'rate-plan',
    children: [
      {
        name: 'Rate plans',
        route: 'rate-plan/rate-plans'
      },
      {
        name: 'Rate plan prices',
        route: 'rate-plan/rate-plan-prices'
      },
      {
        name: 'Rate plan price room types',
        route: 'rate-plan/rate-plan-price-room-types'
      },
      {
        name: 'Rate plan rules',
        route: 'rate-plan/rate-plan-rules'
      },
      {
        name: 'Rate plan rule settings',
        route: 'rate-plan/rate-plan-rule-settings'
      },
      {
        name: 'Extra services',
        route: 'rate-plan/extra-services'
      },
      {
        name: 'Extra service groups',
        route: 'rate-plan/extra-service-groups'
      },
      {
        name: 'Booking confirmations',
        route: 'rate-plan/booking-confirmations'
      },
      {
        name: 'Booking costs',
        route: 'rate-plan/booking-costs'
      },
      {
        name: 'Cancellation-policy',
        route: 'rate-plan/cancellation-policies'
      },
      {
        name: 'Currencies',
        route: 'rate-plan/currencies'
      },
      {
        name: 'Customer information',
        route: 'rate-plan/customer-information'
      },
      {
        name: 'Penalties',
        route: 'rate-plan/penalties'
      },
    ]
  }
] satisfies DashboardItem[];
