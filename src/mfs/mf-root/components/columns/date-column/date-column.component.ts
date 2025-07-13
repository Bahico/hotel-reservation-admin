import {Component} from '@angular/core';
import {BaseColumnComponent} from '@components/components';
import {DatePipe} from '@angular/common';

@Component({
    templateUrl: 'date-column.component.html',
    selector: 'date-column'
})
export class DateColumnComponent extends BaseColumnComponent {}
