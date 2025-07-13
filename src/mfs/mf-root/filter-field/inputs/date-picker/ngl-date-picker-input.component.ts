import {ChangeDetectionStrategy, Component, input, Input, OnChanges, output, SimpleChanges} from '@angular/core';
import {NglFilterField} from "../../ngl-filter-field";

import moment from "moment";
import {Moment} from "moment";
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'ngl-date-picker-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TranslatePipe,
    FormsModule,
    NzDatePickerComponent
  ],
  template: `
    @let field$ = field();
    <nz-date-picker
      [nzSize]="field$.size"
      [(ngModel)]="field$.value"
      [nzPlaceHolder]="field$.placeholder | translate"
      [nzInputReadOnly]="field$.options.nzInputReadOnly"
      [nzFormat]="field$.options.nzFormat || 'dd.MM.yyyy'"
      [nzShowTime]="field$.options.nzShowTime"
      (ngModelChange)="convertModel($event)"
    />
  `,
  styles: [`
    nz-date-picker {
      width: 100%;
    }
  `],
})
export class NglDatePickerInputComponent implements OnChanges {
  field = input.required<NglFilterField>();
  fieldChange = output<NglFilterField>();

  ngOnChanges(changes: SimpleChanges): void {
    const field: NglFilterField = changes['field'].currentValue || {};
    if (field.value !== null && field.value !== undefined) {
      this.fieldChange.emit({...this.field(), value: this.toModel(field.value)});
    }
  }

  convertModel(date: Date): void {
    this.fieldChange.emit({...this.field(), value: this.fromModel(date)})
    this.field().onChange(this.field().value);
  }

  // noinspection JSMethodCanBeStatic
  private toModel(date: Moment): Date {
    return moment(date).toDate();
  }

  // noinspection JSMethodCanBeStatic
  private fromModel(date: Date): string {
    return moment(date).toJSON();
  }
}
