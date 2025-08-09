import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardNavbar, DashboardSidebar} from '@components/layout';
import {DashboardItem} from '@components/models';
import {RootSharedModule} from '@components/root-shared.module';

import staffItems from "staff/items";
import organizationItems from "organization/items";
import hotelItems from "hotel/items";
import userItems from "user/items";
import ratePlanItems from "rate-plan/items";

@Component({
  imports: [
    RouterOutlet,
    DashboardSidebar,
    DashboardNavbar,
    RootSharedModule
  ],
  templateUrl: 'dashboard.html',
  styleUrl: 'dashboard.scss'
})
export default class Dashboard {
  sidebarCollapsed = signal(false);

  dashboardItems = signal<DashboardItem[]>([
    // ...staffItems,
    ...organizationItems,
    ...ratePlanItems,
    ...hotelItems,
    ...userItems
  ]);
}
