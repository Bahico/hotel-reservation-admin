import {Component} from '@angular/core';
import {BaseInput} from '../base/base-input';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '@components/components';
import {NgxMaskDirective} from 'ngx-mask';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {TranslateDirective} from '@ngx-translate/core';

/**
 *
 */
@Component({
  selector: 'input-number',
  imports: [
    ValidatorComponent,
    NgxMaskDirective,
    ReactiveFormsModule,
    NzInputDirective,
    TranslateDirective
  ],
  templateUrl: './input-number.component.html',
})
export class InputNumberComponent extends BaseInput {}
