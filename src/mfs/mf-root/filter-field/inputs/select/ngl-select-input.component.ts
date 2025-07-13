import {Component, input, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {NglFilterField} from '../../ngl-filter-field';
import {FormsModule} from '@angular/forms';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'ngl-select-input',
  template: `
    @let field$ = field();

    <nz-select
      [nzSize]="field$.size"
      [nzMode]="mode()"
      [nzShowArrow]="true"
      [nzAllowClear]="true"
      [nzShowSearch]="true"
      [compareWith]="compareFn"
      [nzLoading]="loading"
      [nzMaxTagCount]="field$.options.nzMaxTagCount"
      [nzServerSearch]="field$.options.nzShowSearch"
      [nzOptionOverflowSize]="field$.options.nzOptionOverflowSize"
      [(ngModel)]="field$.value"
      (ngModelChange)="field$.onChange($event)"
      (nzOnSearch)="onSearch($event)"
    >
      @for (item of field$.options.items; track $index) {
        <nz-option
          [nzValue]="field$.options.nzValue ? item[field$.options.nzValue] : item"
          [nzLabel]="getLabel(item)"
        />
      }

    </nz-select>
  `,
  imports: [
    FormsModule,
    NzSelectComponent,
    NzOptionComponent
  ],
  styles: [`
    nz-select {
      width: 100%;
    }
  `]
})
export class NglSelectInputComponent implements OnInit, OnDestroy {
  field = input.required<NglFilterField>();
  mode = input<'default' | 'multiple'>('default');

  loading: boolean;
  nzServerSearch: boolean;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly http: HttpClient,
    private readonly translateService: TranslateService
  ) {
  }

  ngOnInit(): void {
    this.initProperties();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initProperties(): void {
    this.field().options.nzMaxTagCount = this.field().options.nzMaxTagCount || 0;
    this.field().options.nzOptionOverflowSize = this.field().options.nzOptionOverflowSize || 10;

    // if (!(this.field().options.items instanceof Observable)) {
    //   this.field().options.items = of(this.field().options.items);
    // }

    if (this.field().options.resourceUrl) {
      this.nzServerSearch = true;

      if (this.field().value) {
        this.onSearch(this.field().value);
      }
    }
  }

  getLabel(item: any): string {
    const translation = this.field().options.nzLabelTranslation;

    if (translation && !this.field().options.nzLabel) {
      return this.translateService.instant(`${translation}.${item}`);
    }

    if (translation) {
      return this.translateService.instant(`${translation}.${item[this.field().options.nzLabel]}`);
    }

    if (translation === '' && !this.field().options.nzLabel) {
      return this.translateService.instant(item);
    }

    if (this.field().options.nzLabel) {
      return item[this.field().options.nzLabel];
    }

    return item;
  }

  onSearch(text: string): void {
    this.field().options.nzOnSearch?.emit(text);

    if (!this.field().options.resourceUrl) return;

    const query: any = {};

    if (text) {
      query[`${this.field().options.nzLabel}.contains`] = text;
    }

    this.fetchDataFromApi(query);
  }

  compareFn = (o1: any, o2: any): boolean => {
    if ((o1 === null || o1 === undefined) || (o2 === null || o2 === undefined)) {
      return false;
    }

    if (this.field().options.nzLabel && !this.field().options.nzValue) {
      return o1[this.field().options.nzLabel] === o2[this.field().options.nzLabel];
    }

    return o1 === o2;
  };

  private fetchDataFromApi(query?: {}): void {
    this.loading = true;

    this.http.get<any[]>(this.field().options.resourceUrl, {
      params: query,
      observe: 'body'
    })
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loading = false)
      )
      .subscribe((res) => {
        this.field().options.items = res;
      });
  }
}
