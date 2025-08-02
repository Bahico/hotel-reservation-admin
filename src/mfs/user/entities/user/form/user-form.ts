import {Component} from '@angular/core';
import {EntityFormPage} from '@components/pages';
import {UserModel} from 'user/entities/user/models/user.model';
import {UserService} from 'user/entities/user/services/user.service';
import {MfFormComponent} from '@components/components';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  templateUrl: 'user-form.html',
  imports: [MfFormComponent, TranslatePipe]
})
export class UserForm extends EntityFormPage<UserModel> {
  override title = 'user';

  constructor(private userService: UserService,) {
    super(userService, new UserModel());
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  override submit() {
    if (!this.formGroup.get('id').value) {
      super.submit();
    } else {
      if (this.checkForm()) {
        this.isSubmitting.set(true);
        this.userService.update(this.rowValue).subscribe({
          next: res => this.onSubmitSuccess(res),
          error: err => this.onSubmitError(err)
        })
      }
    }
  }
}
