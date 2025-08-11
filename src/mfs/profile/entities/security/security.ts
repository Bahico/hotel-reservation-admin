import {ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';
import {AccountService} from '@components/account';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzMessageService} from 'ng-zorro-antd/message';
import {SecurityService} from './security-service';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzInputDirective, NzInputGroupComponent} from 'ng-zorro-antd/input';

@Component({
  templateUrl: 'security.html',
  styleUrl: 'security.scss',
  selector: 'profile',
  imports: [
    NzTabsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NzIconDirective,
    NzInputGroupComponent,
    FormsModule,
    NzIconDirective,
    NzInputDirective,
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
        next: () => {
          this.message.success('success saved')
          history.back()
        },
        error: () => {
          this.message.error('Fail')
        }
      })
  }
}
