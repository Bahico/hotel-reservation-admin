import { Component, input } from '@angular/core';
import { EntityListPage } from '@components/pages';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzButtonComponent } from 'ng-zorro-antd/button';

/**
 *
 */
@Component({
  selector: 'list-row-actions',
  templateUrl: 'list-row-actions.html',
  imports: [
    NzIconDirective,
    NzButtonComponent
  ],
  styleUrl: 'list-row-actions.css'
})
export class ListRowActions {

  /**
   *
   */
  formPage = input.required<EntityListPage<any>>();

  /**
   *
   */
  data = input.required();
}
