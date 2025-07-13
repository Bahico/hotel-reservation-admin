import {Component} from '@angular/core';
import {BaseInput} from '../base/base-input';
import {NgxMaskDirective} from 'ngx-mask';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '@components/components/validator/validator.component';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {TranslateDirective} from '@ngx-translate/core';

/**
 *
 */
@Component({
  selector: 'input-text',
  imports: [
    NgxMaskDirective,
    ReactiveFormsModule,
    ValidatorComponent,
    NzInputDirective,
    TranslateDirective
  ],
  templateUrl: 'input-text.component.html'
})
export class InputTextComponent extends BaseInput {}
