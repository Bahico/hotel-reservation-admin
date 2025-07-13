import {Component, input, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import { NzSpinComponent } from 'ng-zorro-antd/spin';

/**
 *
 */
@Component({
  selector: '[list-no-data]',
  imports: [
    TranslatePipe,
    NzSpinComponent
  ],
  templateUrl: './list-no-data.component.html'
})
export class ListNoDataComponent {

  /**
   *
   */
  colSpan = input<number>();

  /**
   *
   */
  isDataLoading = input<boolean>();
}
