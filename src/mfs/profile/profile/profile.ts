import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {AccountService} from '@components/account';
import {AsyncPipe} from '@angular/common';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzTabsModule} from 'ng-zorro-antd/tabs';

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

  protected readonly emptyAvatar = 'images/blank-profile.webp';

  onImgError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.emptyAvatar;
  }
}
