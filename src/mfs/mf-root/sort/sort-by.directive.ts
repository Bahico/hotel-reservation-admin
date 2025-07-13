import {AfterContentInit, contentChild, Directive, Host, HostListener, input, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SortDirective} from './sort.directive';
import { IconComponent } from '@components/components';

@Directive({
    selector: '[sortBy]'
})
export class SortByDirective<T> implements AfterContentInit, OnDestroy {
    sortBy = input<T>();

    iconComponent = contentChild(IconComponent);

    readonly sortIcon = 'sort';
    readonly sortAscIcon = 'sort-up';
    readonly sortDescIcon = 'sort-down';

    private readonly destroy$ = new Subject<void>();

    constructor(
      @Host() private sort: SortDirective<T>
    ) {
        sort.predicateChange.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateIconDefinition());
        sort.ascendingChange.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateIconDefinition());
    }

    @HostListener('click')
    onClick(): void {
        this.sort.sort(this.sortBy());
    }

    ngAfterContentInit(): void {
        this.updateIconDefinition();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private updateIconDefinition(): void {
        if (this.iconComponent()) {
            let icon = this.sortIcon;
            if (this.sort.predicate === this.sortBy()) {
                icon = this.sort.ascending ? this.sortAscIcon : this.sortDescIcon;
            }
            this.iconComponent()?.setIconHtml(icon);
        }
    }
}
