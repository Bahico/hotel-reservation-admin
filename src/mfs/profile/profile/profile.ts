import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AccountService, LoginService} from '@components/account';
import {AsyncPipe} from '@angular/common';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: 'profile.html',
  styleUrl: 'profile.scss',
  selector: 'profile',
  imports: [
    AsyncPipe,
    NzButtonComponent,
    NzIconDirective,
    NzTabsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Profile {
  protected readonly accountService = inject(AccountService);
  protected readonly loginService = inject(LoginService);
  private readonly router = inject(Router);
  protected readonly emptyAvatar = 'images/blank-profile.webp';
  private readonly route = inject(ActivatedRoute);
  onImgError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.emptyAvatar;
  }
  navigate(route:string){
      this.router.navigate([route], { relativeTo: this.route });
  }
}
