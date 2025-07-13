import {Component, input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzInputDirective} from 'ng-zorro-antd/input';
import {TranslateDirective} from '@ngx-translate/core';

/**
 *
 */
@Component({
  selector: 'input-id',
  templateUrl: 'input-id.component.html',
  imports: [
    FormsModule,
    NzInputDirective,
    TranslateDirective,
  ],
  styleUrl: '../input-text/input-text.component.scss'
})
export class InputIdComponent {

  /**
   *
   */
  id = input<number>();

  /**
   *
   */
  isDisabled = input(true);
}
