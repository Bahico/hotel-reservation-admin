import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { IconComponent } from '@components/components';
import { DashboardItem } from '@components/models';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  UrlSegment,
} from '@angular/router';
import {OrganizationService} from '@components/account/organization/organization.service';
import {AsyncPipe} from '@angular/common';
import {map} from 'rxjs/operators';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: 'dashboard-sidebar.html',
  imports: [IconComponent, RouterLink, RouterLinkActive, AsyncPipe],
  styleUrl: 'dashboard-sidebar.scss',
})
export class DashboardSidebar implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly organizationService = inject(OrganizationService);

  collapsed = input(false);
  collapsedChange = output<boolean>();

  dashboardItems = input.required<DashboardItem[]>();
  openIndex = signal(-1);
  activeIndex = signal(-1);

  readonly organizationName$ = this.organizationService.organization$.pipe(map(organization => organization.name || 'Hotel'));

  ngOnInit() {
    this.changeIndex();
    this.router.events.subscribe(() => this.changeIndex());
  }

  changeIndex() {
    const path = this.getFullRoutePath(this.route).split('/dashboard/')[1];
    for (const item of this.dashboardItems()) {
      if (item.route === path) {
        this.activeIndex.set(-1);
        this.openIndex.set(-1);
        break;
      } else if (item.children) {
        for (const child of item.children) {
          if (child.route === path) {
            this.activeIndex.set(this.dashboardItems().indexOf(item));
            this.openIndex.set(this.dashboardItems().indexOf(item));
            break;
          }
        }
      }
    }
  }

  getFullRoutePath(route: ActivatedRoute): string {
    let path = '';
    let currentRoute: ActivatedRoute | null = route;

    while (currentRoute) {
      const segments: UrlSegment[] = currentRoute.snapshot.url;
      const urlPart = segments.map((s) => s.path).join('/');
      if (urlPart) {
        path += '/' + urlPart;
      }
      currentRoute = currentRoute.firstChild;
    }

    return path || '/';
  }

  toggleSidebar() {
    this.collapsedChange.emit(!this.collapsed());
  }

  clickItem(index: number): void {
    this.openIndex.update((item) => (item === index ? -1 : index));
  }
}
