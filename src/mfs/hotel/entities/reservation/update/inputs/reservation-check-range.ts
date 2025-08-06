import {Component, OnInit} from '@angular/core';
import {BaseInput} from '@components/components';
import {ControlContainer, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {TranslateDirective} from '@ngx-translate/core';

@Component({
  imports: [
    NzDatePickerModule,
    FormsModule,
    TranslateDirective
  ],
  templateUrl: 'reservation-check-range.html',
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `]
})
export class ReservationCheckRange extends BaseInput implements OnInit {
  formGroup: FormGroup<{checkInDate: FormControl<Date | null>; checkOutDate: FormControl<Date | null>}>;

  constructor(
    private readonly controlContainer: ControlContainer,
  ) {
    super();
  }

  ngOnInit() {
    this.formGroup = <FormGroup>this.controlContainer.control;
  }

  onChange(dates: [Date, Date]) {
    this.formGroup.patchValue({
      checkInDate: dates[0],
      checkOutDate: dates[1],
    })
  }
}
