import {Component, OnInit} from '@angular/core';
import {BaseInput, ValidatorComponent} from '@components/components';
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {TranslateDirective} from '@ngx-translate/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {UserChangePassword} from 'user/entities/user/update/password/change-password';

@Component({
  imports: [
    NzInputDirective,
    ReactiveFormsModule,
    ValidatorComponent,
    NzButtonComponent,
    TranslateDirective
  ],
  template: `
    <label class="label" [translate]="info().title"></label>
    <br>
    @if (formGroup.controls.id?.value) {
        <button
          (click)="openChangePassword()"
          type="button"
          nz-button
          nzType="primary"
        >
          Parolni o'zgartirishni xoxlaysizmi
        </button>
    } @else {
      <input type="text" nz-input [formControl]="control()">
      <validator [formControl]="control()" [touched]="touched()" />
    }
  `
})
export class UserPasswordInput extends BaseInput implements OnInit {
  formGroup: FormGroup<{id: FormControl<string | null>; login: FormControl<string | null>}>;

  constructor(
    private readonly controlContainer: ControlContainer,
    private readonly nzModalService: NzModalService
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = <FormGroup>this.controlContainer.control;
  }

  openChangePassword() {
    const modalRef = this.nzModalService.create({
      nzContent: UserChangePassword,
      nzFooter: null,
      nzTitle: null
    })
    modalRef.componentInstance.nzModalRef = modalRef;
    modalRef.componentInstance.login = this.formGroup.controls.login.value;

    modalRef
      .afterClose
      .subscribe((password: string) => {
        console.log(password);
      })
  }
}
