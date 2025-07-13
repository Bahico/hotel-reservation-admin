import { Component, computed } from '@angular/core';
import { BaseInput } from '../base/base-input';
import { NzOptionComponent, NzSelectComponent } from 'ng-zorro-antd/select';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { ValidatorComponent } from '../../validator/validator.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-enum',
  imports: [
    NzSelectComponent,
    NzOptionComponent,
    TranslatePipe,
    ValidatorComponent,
    ReactiveFormsModule,
    TranslateDirective
  ],
  templateUrl: './input-enum.component.html'
})
export class InputEnumComponent extends BaseInput {
  keys = computed(() => Object.keys(this.info().enumType));
}
