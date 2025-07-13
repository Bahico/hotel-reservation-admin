import {inject, signal} from '@angular/core';
import {EventManager} from '@components/util/event-manager.service';
import {UrlHelper} from '@components/helpers/url-helper';
import {HttpResponse} from '@angular/common/http';
import {finalize, takeUntil} from 'rxjs/operators';
import {combineLatest, Observable, Subject, Subscription} from 'rxjs';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {AlertService} from '@components/components';
import {ASC, DESC, ITEMS_PER_PAGE, SORT} from '@components/config';
import {NglFilterField} from '@components/filter-field/ngl-filter-field';

export abstract class FilterPage<ENTITY> {
  private readonly _router = inject(Router);
  private readonly _alertService = inject(AlertService);
  private readonly eventManager = inject(EventManager);

  data = signal<ENTITY[]>([]);

  protected readonly destroy$ = new Subject<void>();

  filterFields: NglFilterField[] = [];
  loading = signal(false);
  page = signal(1);
  totalItems = signal(0);
  predicate: string;
  ascending: boolean;
  showFilter = signal(false);
  ngbPaginationPage = signal(1);
  itemsPerPage = ITEMS_PER_PAGE;
  queryParams: any;

  /**
   * for work data filter
   * @protected
   */
  protected query: any;
  protected modifySubscription?: Subscription;

  /**
   *
   * @param activatedRoute
   * @param cb
   * @protected
   */
  protected handleNavigation(activatedRoute: ActivatedRoute, cb?: (data: Data, params: Params) => void): void {
    combineLatest([activatedRoute.data, activatedRoute.queryParams])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([data, params]) => {
        this.queryParams = params;
        const pageNumber = params['page'] ? +params['page'] : 1;
        const sort = ((params[SORT] ?? data['defaultSort']) ?? 'id').split(',');
        const ascending = sort[1] === ASC;
        this.showFilter.set(this.hasQuery());
        if (pageNumber !== this.page() || sort[0] !== this.predicate || ascending !== this.ascending) {
          this.predicate = sort[0] ?? 'id';
          this.ascending = ascending;
          this.page.set(pageNumber);
        }

        if (cb) {
          cb(data, params);
        }
      });
  }

  /**
   *
   * @param query
   */
  setQuery(query: any): void {
    let data = {...this.queryParams};
    Object.keys(this.query || {}).forEach(item => {
      delete data[item];
    });
    this.queryParams = data;

    this.query = query;
    if (Object.keys(query)?.length !== 0) {
      this.page.set(1);
    }
  }

  /**
   *
   * @protected
   */
  protected unsubscribe(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.modifySubscription?.unsubscribe();
  }

  /**
   *
   * @protected
   */
  protected sort(): any {
    if (this.predicate !== undefined) {
      const result = [this.predicate + ',' + (this.ascending ? ASC : DESC)];
      if (this.predicate !== 'id') {
        // result.push('id');
      }
      return result;
    }
  }

  /**
   *
   * @param page
   * @protected
   */
  protected getRequestParams(page?: number): any {
    this.page.set(page ?? this.page() ?? 1);

    return {
      ...this.queryParams,
      page: this.page() - 1,
      size: this.itemsPerPage,
      sort: this.sort(),
      ...this.query,
    };
  }

  /**
   *
   * @protected
   */
  protected loadPageOperators<T>(): (source$: Observable<T>) => Observable<T> {
    return source$ =>
      source$.pipe(
        finalize(() => (this.loading.set(false))),
        takeUntil(this.destroy$)
      );
  };

  /**
   *
   * @param response
   * @protected
   */
  protected onDataReceived(response: HttpResponse<ENTITY[]>): void {
    this.totalItems.set(Number(response.headers.get('X-Total-Count')));

    this.refreshUrlParams();

    this.data.set(response.body ?? []);
    this.ngbPaginationPage.set(this.page());

    this._alertService.clear();
    if (!this.data()?.length) {
      this._alertService.warning('data.noData');
    }
  }

  /**
   *
   * @private
   */
  private refreshUrlParams(): void {
    this._router
      .navigate([UrlHelper.getRouteUrlWithoutParams(this._router)], {
        queryParams: {
          ...this.queryParams,
          page: this.page(),
          size: this.itemsPerPage,
          sort: this.predicate + ',' + (this.ascending ? ASC : DESC),
          ...this.query
        }
      })
      .then();
  }

  /**
   *
   * @private
   */
  private hasQuery(): boolean {
    return !!localStorage.getItem(`${UrlHelper.getRouteUrlWithoutParams(this._router)}.query`);
  }

  /**
   *
   * @param event
   * @param cb
   * @protected
   */
  protected registerToModify(event: string, cb: () => void): void {
    this.modifySubscription = this.eventManager.subscribe(event, () => cb());
  }

  /**
   *
   * @param page
   */
  abstract loadData(page?: number): void;
}
