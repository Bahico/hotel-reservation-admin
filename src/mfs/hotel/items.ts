import {DashboardItem} from '@components/models';

export default [
  {
    name: 'Hotel',
    icon: 'hotel',
    children: [
      {
        name: 'Book room',
        route: 'hotel/book-room',
      },
      {
        name: 'Hotel',
        route: 'hotel/hotels',
      },
      {
        name: 'Amenities',
        route: 'hotel/amenities',
      },
      {
        name: 'Reservations',
        route: 'hotel/reservations',
      },
      {
        name: 'Reservation-users',
        route: 'hotel/reservation-users',
      },
      {
        name: 'Rooms',
        route: 'hotel/rooms',
      },
      {
        name: 'Room-inventories',
        route: 'hotel/room-inventories',
      },
      {
        name: 'Room-pricings',
        route: 'hotel/room-pricings',
      },
      {
        name: 'Room-types',
        route: 'hotel/room-types',
      },
    ]
  }
] satisfies DashboardItem[];
