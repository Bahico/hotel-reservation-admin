import {Component, computed, inject, input,} from '@angular/core';
import {EntityListPage} from '@components/pages';
import {ColumnManagerService} from '@components/logics';
import {IconComponent} from '@components/components';
import {TranslatePipe} from '@ngx-translate/core';
import {NgComponentOutlet} from '@angular/common';
import {NglFilterFieldComponent} from '@components/filter-field/ngl-filter-field.component';
import {SortDirective} from '@components/sort/sort.directive';
import {SortByDirective} from '@components/sort/sort-by.directive';
import {NzCellFixedDirective, NzTableComponent, NzTableModule, NzThMeasureDirective} from 'ng-zorro-antd/table';
import {NzPaginationComponent} from 'ng-zorro-antd/pagination';
import {AlertComponent} from '@components/components/alert/alert.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import {ListRowActions} from './components/list-row-actions/list-row-actions';

/**
 *
 */
@Component({
  selector: 'mf-list',
  templateUrl: 'mf-list.html',
  styleUrl: 'mf-list.scss',
  imports: [
    TranslatePipe,
    NglFilterFieldComponent,
    AlertComponent,
    NzTableComponent,
    SortDirective,
    IconComponent,
    SortByDirective,
    NzTableModule,
    NzPaginationComponent,
    NgComponentOutlet,
    ListHeaderComponent,
    ListRowActions
  ]
})
export class MfList {
  /**
   *
   * @protected
   */
  protected readonly columnManagerService = inject(ColumnManagerService);

  /**
   * for page work
   */
  page = input.required<EntityListPage<any>>();

  /**
   *
   */
  // listHeaderContent = input<TemplateRef<any>>();

  /**
   *
   */
  columns = computed(() => this.page().getColumns());
}
