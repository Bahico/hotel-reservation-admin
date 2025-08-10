import {ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';
import {AccountService} from '@components/account';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzMessageService} from 'ng-zorro-antd/message';
import {SecurityService} from './security-service';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {TranslateDirective, TranslatePipe} from '@ngx-translate/core';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';

@Component({
  templateUrl: 'security.html',
  styleUrl: 'security.scss',
  selector: 'profile',
  imports: [
    NzTabsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzIconDirective,
    TranslatePipe,
    NzInputGroupComponent,
    NzInputDirective,
    FormsModule,
    NzIconDirective,
    NzButtonComponent,
    TranslateDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Security implements OnInit {
  protected readonly accountService = inject(AccountService);
  protected readonly history = history;
  passwordVisible = signal(false);
  password = model<string>();


  constructor(private securityService: SecurityService, private message: NzMessageService) {}

  ngOnInit() {}

  save() {
    this.securityService.changePassword({
      login: this.accountService.getAccount()?.login,
      password: this.password()
    }).subscribe(
      {
        next: (res) => {
          this.message.success('success saved')
          history.back()
        },
        error: () => {
          this.message.error('Fail')
        }
      })
  }
}
