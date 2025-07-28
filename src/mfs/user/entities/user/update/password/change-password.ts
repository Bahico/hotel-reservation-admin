import {Component, inject, model, signal} from '@angular/core';
import {TranslateDirective, TranslatePipe} from '@ngx-translate/core';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {UserService} from 'user/entities/user/services/user.service';
import {finalize} from 'rxjs/operators';

@Component({
  imports: [
    TranslatePipe,
    NzInputGroupComponent,
    NzInputDirective,
    FormsModule,
    NzIconDirective,
    NzButtonComponent,
    TranslateDirective
  ],
  templateUrl: 'change-password.html'
})
export class UserChangePassword {
  private readonly userService = inject(UserService);

  nzModalRef: NzModalRef;

  loading = signal(false);
  passwordVisible = signal(false);
  password = model<string>();
  login: string;

  closeModal(): void {
    this.nzModalRef.close();
  }

  save(): void {
    this.loading.set(true);

    this.userService.changePassword({
      login: this.login,
      password: this.password()
    })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe(() => {
        this.nzModalRef.close(this.password());
      })
  }
}
