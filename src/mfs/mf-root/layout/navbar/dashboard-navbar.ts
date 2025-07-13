import { Component, inject } from '@angular/core';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { AccountService, LoginService } from '../../account';
import { ProfileNavbar } from './profile/profile-navbar';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: 'dashboard-navbar.html',
  styleUrl: 'dashboard-navbar.scss',
  imports: [
    NzButtonModule,
    NzIconDirective,
    ProfileNavbar
  ],
  host: {
    '[style.width.%]': '100'
  }
})
export class DashboardNavbar {
  protected readonly loginService = inject(LoginService);
}
