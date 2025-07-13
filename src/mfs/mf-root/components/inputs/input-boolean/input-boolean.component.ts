import {Component} from '@angular/core';
import {BaseInput, ValidatorComponent} from '@components/components';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateDirective} from '@ngx-translate/core';
import {NzSwitchComponent} from 'ng-zorro-antd/switch';

@Component({
  templateUrl: 'input-boolean.component.html',
  imports: [
    FormsModule,
    ValidatorComponent,
    ReactiveFormsModule,
    TranslateDirective,
    NzSwitchComponent,
  ],
  selector: 'input-boolean',
})
export class InputBooleanComponent extends BaseInput {}
