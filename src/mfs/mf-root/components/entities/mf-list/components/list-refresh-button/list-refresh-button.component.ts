import { Component, computed, input, output } from '@angular/core';
import { EntityListPage } from '@components/pages';

/**
 *
 */
@Component({
    selector: 'list-refresh-button',
    templateUrl: './list-refresh-button.component.html'
})
export class ListRefreshButtonComponent {


    /**
     *
     */
    listPage = input<EntityListPage<any>>();

    /**
     *
     */
    isLoading = input();

    /**
     *
     */
    click = output<unknown>();

    /**
     *
     */
    isDataLoading = computed(() => this.listPage().isDataLoading() ?? this.isLoading())


    /**
     *
     */
    onClick() {
        this.listPage().loadData();
        this.click.emit(undefined);
    }
}
