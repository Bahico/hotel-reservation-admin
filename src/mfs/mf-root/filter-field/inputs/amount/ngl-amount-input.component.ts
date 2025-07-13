import {ChangeDetectionStrategy, Component, input, Input} from '@angular/core';
import {NglFilterField} from "../../ngl-filter-field";
import {NgxMaskDirective} from 'ngx-mask';
import {FormsModule} from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';

@Component({
  selector: 'ngl-amount-input',
  template: `
    @let field$ = field();
    <input
      nz-input
      [nzSize]="field$.size"
      [(ngModel)]="field$.value"
      [placeholder]="field$.placeholder"
      (ngModelChange)="field$.onChange($event)"
      autocomplete="off"
      mask="separator.{{field$.options.amountRatio === 100 ? 2 : 0}}"
    />
  `,
  imports: [
    NgxMaskDirective,
    FormsModule,
    NzInputDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NglAmountInputComponent {
  field = input.required<NglFilterField>();
}
