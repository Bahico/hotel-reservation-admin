import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NglFilterField } from '../../ngl-filter-field';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';

@Component({
  selector: 'ngl-text-input',
  template: `
    <input
      nz-input
      [nzSize]="field().size"
      [(ngModel)]="field().value"
      [placeholder]="field().placeholder"
      (ngModelChange)="field().onChange($event)"
      [mask]="field().options.mask"
    />
  `,
  imports: [
    NgxMaskDirective,
    FormsModule,
    NzInputDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NglTextInputComponent {
  field = input.required<NglFilterField>();
}
