import { Component } from '@angular/core';
import { BaseColumnComponent } from '@components/components/columns/base-column.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzTagComponent } from 'ng-zorro-antd/tag';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  imports: [
    TranslateModule,
    NzTagComponent,
    NzIconDirective
  ],
    templateUrl: 'boolean-column.component.html',
    selector: 'boolean-column:not(p)'
})
export class BooleanColumnComponent extends BaseColumnComponent {}
