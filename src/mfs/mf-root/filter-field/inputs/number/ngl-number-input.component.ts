import { Component, input } from '@angular/core';
import { NglFilterField } from '../../ngl-filter-field';
import { FormsModule } from '@angular/forms';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';

@Component({
  selector: 'ngl-number-input',
  template: `
    @let field$ = field();
    <nz-input-number
      [nzSize]="field$.size"
      [ngModel]="field$.value || null"
      [nzPlaceHolder]="field$.placeholder"
      [nzMin]="field$.options.nzMax"
      [nzMax]="field$.options.nzMax"
      (ngModelChange)="field$.onChange($event); field$.value = $event"
    />
  `,
  styles: [`
    nz-input-number {
      width: 100%;
    }
  `],
  imports: [
    FormsModule,
    NzInputNumberComponent
  ]
})
export class NglNumberInputComponent {
  field = input.required<NglFilterField>();
}
