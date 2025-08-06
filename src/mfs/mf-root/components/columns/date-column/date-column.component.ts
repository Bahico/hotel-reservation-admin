import {Component} from '@angular/core';
import {BaseColumnComponent} from '@components/components';
import {DatePipe} from '@angular/common';

@Component({
  templateUrl: 'date-column.component.html',
  imports: [
    DatePipe
  ],
  selector: 'date-column'
})
export class DateColumnComponent extends BaseColumnComponent {}
