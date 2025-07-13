import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { AccountService } from '@components/account';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'profile-navbar.html',
  selector: 'profile-navbar',
  styleUrl: 'profile-navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileNavbar {
  private readonly router = inject(Router);
  protected readonly accountService = inject(AccountService);

  protected readonly emptyAvatar = 'images/blank-profile.webp';

  @HostListener('click')
  onClick() {
    this.router.navigateByUrl('/dashboard/profile');
  }

  onImgError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = this.emptyAvatar;
  }
}
