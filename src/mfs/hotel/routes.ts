import { Routes } from '@angular/router';

export default [
  {
    path: 'book-room',
    loadComponent: () => import('./entities/book-room/book-room'),
  },
  {
    path: 'hotels',
    loadComponent: () => import('./entities/hotel/list/hotel-list'),
  },
  {
    path: 'amenities',
    loadComponent: () => import('./entities/amenity/list/amenity-list'),
  },
  {
    path: 'reservations',
    loadComponent: () => import('./entities/reservation/list/reservation-list'),
  },
  {
    path: 'reservation-users',
    loadComponent: () =>
      import('./entities/reservation-user/list/reservation-user-list'),
  },
  {
    path: 'rooms',
    loadComponent: () => import('./entities/room/list/room-list'),
  },
  {
    path: 'room-inventories',
    loadComponent: () =>
      import('./entities/room-inventory/list/room-inventory-list'),
  },
  {
    path: 'room-pricings',
    loadComponent: () =>
      import('./entities/room-pricing/list/room-pricing-list'),
  },
  {
    path: 'room-types',
    loadComponent: () => import('./entities/room-type/list/room-type-list'),
  },
] satisfies Routes;
