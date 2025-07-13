import {Component} from '@angular/core';
import {BaseInput} from '../base/base-input';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '@components/components/validator/validator.component';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {TranslateDirective} from '@ngx-translate/core';

/**
 *
 */
@Component({
  selector: 'input-date',
  templateUrl: './input-date.component.html',
  imports: [
    ValidatorComponent,
    ReactiveFormsModule,
    NzDatePickerModule,
    TranslateDirective,
  ]
})
export class InputDateComponent extends BaseInput {
}
