import {Component, input} from '@angular/core';
import {EntityListPage} from '@components/pages';
import {IconComponent} from '@components/components';
import {TranslatePipe} from '@ngx-translate/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  selector: 'list-header',
  templateUrl: './list-header.component.html',
  imports: [
    IconComponent,
    TranslatePipe,
    NzButtonComponent,
    NzIconDirective
  ],
  styleUrl: './list-header.component.css'
})
export class ListHeaderComponent {

  /**
   *
   */
  openForm = input.required<() => void>();

  /**
   *
   */
  listPage = input<EntityListPage<any>>();

  /**
   *
   */
  refreshClick() {
    this.listPage()?.loadData();
  }
}
