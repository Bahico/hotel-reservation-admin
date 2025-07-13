import {Component} from '@angular/core';
import {BaseInput} from '../base/base-input';
import {ReactiveFormsModule} from '@angular/forms';
import {ValidatorComponent} from '@components/components/validator/validator.component';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {TranslateDirective} from '@ngx-translate/core';

/**
 *
 */
@Component({
  selector: 'input-comment',
  imports: [
    ValidatorComponent,
    ReactiveFormsModule,
    NzInputDirective,
    TranslateDirective,
  ],
  templateUrl: './input-comment.component.html'
})
export class InputCommentComponent extends BaseInput {
}
