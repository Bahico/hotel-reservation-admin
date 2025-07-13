import {Component} from '@angular/core';
import {BaseColumnComponent} from '@components/components';
import {NgxMaskPipe} from 'ngx-mask';

@Component({
    imports: [
        NgxMaskPipe
    ],
    templateUrl: 'number-column.component.html',
    selector: 'number-column'
})
export class NumberColumnComponent extends BaseColumnComponent {}
