import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {AccountService} from '@components/account';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NgxMaskDirective} from 'ngx-mask';
import {NzMessageService} from 'ng-zorro-antd/message';
import {MyProfileService} from './my-profile-service';

@Component({
  templateUrl: 'my-profile.html',
  styleUrl: 'my-profile.scss',
  selector: 'profile',
  imports: [
    NzTabsModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    NgxMaskDirective,

  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfile implements OnInit {
  protected readonly accountService = inject(AccountService);
  protected readonly history = history;
  formGroup = new FormGroup({
    activated: new FormControl(true),
    authorities: new FormControl<string[]>([]),
    email: new FormControl(''),
    firstName: new FormControl(''),
    id: new FormControl<number | null>(null),
    imageUrl: new FormControl(''),
    langKey: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl(''),
    tenant: new FormControl<any>(null)
  });


  constructor(private securityService: MyProfileService, private message: NzMessageService) {
  }

  ngOnInit() {
    this.formGroup.patchValue(this.accountService.getAccount())
  }

  onSubmit() {
    this.securityService.editProfile(this.formGroup.getRawValue()).subscribe(
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
