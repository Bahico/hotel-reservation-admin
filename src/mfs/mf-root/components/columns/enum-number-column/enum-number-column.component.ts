import {Component} from '@angular/core';
import {BaseColumnComponent} from '@components/components';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    templateUrl: 'enum-number-column.component.html',
    imports: [
        TranslateModule
    ],
    selector: 'enum-number-column'
})
export class EnumNumberColumnComponent extends BaseColumnComponent { }
