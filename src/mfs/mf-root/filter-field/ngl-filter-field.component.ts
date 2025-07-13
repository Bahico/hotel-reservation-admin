import {Component, EventEmitter, inject, input, Input, OnInit, Output} from '@angular/core';
import {NglFilterField, NglFilterFieldType} from './ngl-filter-field';
import {Router} from '@angular/router';
import {NglAmountService} from "./inputs/amount/ngl-amount.service";
import {debounceTime, Subject} from "rxjs";
import {FormsModule} from '@angular/forms';
import {NglFilterTranslateDirective} from '@components/filter-field/ngl-filter-translate.directive';
import {NglTextInputComponent} from '@components/filter-field/inputs/text/ngl-text-input.component';
import {NglNumberInputComponent} from '@components/filter-field/inputs/number/ngl-number-input.component';
import {NglAmountInputComponent} from '@components/filter-field/inputs/amount/ngl-amount-input.component';
import {
  NglDatePickerInputComponent
} from '@components/filter-field/inputs/date-picker/ngl-date-picker-input.component';
import {NglSelectInputComponent} from '@components/filter-field/inputs/select/ngl-select-input.component';
import {TranslatePipe} from '@ngx-translate/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';

type Size = "large" | "small";


@Component({
  selector: 'ngl-filter-field',
  templateUrl: 'ngl-filter-field.component.html',
  imports: [
    FormsModule,
    NglFilterTranslateDirective,
    NglTextInputComponent,
    NglNumberInputComponent,
    NglAmountInputComponent,
    NglDatePickerInputComponent,
    NglSelectInputComponent,
    TranslatePipe,
    NzButtonComponent
  ],
  styleUrl: 'ngl-filter-field.component.scss'
})
export class NglFilterFieldComponent implements OnInit {
  size = input<Size>('large');

  @Input('fields')
  set fetchFields(fields: NglFilterField[] | undefined) {
    const query = this.getQuery();
    this.fields = fields?.map((field: NglFilterField) => this.initProperties(field, query))!;
    this.filter();
  }

  @Output() readonly onFilter = new EventEmitter<{}>();
  filterSubject = new Subject<any>();

  fields: NglFilterField[];
  querySize: number;
  readonly type = NglFilterFieldType;

  private readonly cacheName: string;

  constructor(
    private readonly amountService: NglAmountService
  ) {
    const componentRoutePath = inject(Router).url.split('?')[0];
    this.cacheName = `${componentRoutePath}.query`;
  }

  ngOnInit() {
    this.filterSubject
      .pipe(debounceTime(100))
      .subscribe(data => {
        this.onFilter.emit(data);
      })
  }

  filter(): void {
    const query: any = {};

    const hasValue = (f: NglFilterField) => f.value !== null && f.value !== undefined && f.value !== '' && f.value?.length !== 0;

    this.fields.filter(f => hasValue(f)).forEach((field: NglFilterField) => {
      query[field.name] = field.value;

      if (field.type === NglFilterFieldType.AMOUNT) {
        query[field.name] = this.amountService.fromModel(field.value, field.options.amountRatio);
      }
    });

    this.updateQuerySize(query);

    if (this.querySize > 0) {
      localStorage.setItem(this.cacheName, JSON.stringify(query));
    } else {
      this.removeQuery();
    }

    this.filterSubject.next(query);
  }

  reset(): void {
    this.fields.forEach(field => field.value = null);
    this.filterSubject.next({});
    this.updateQuerySize(0);
    this.removeQuery();
  }

  private removeQuery(): void {
    localStorage.removeItem(this.cacheName);
  }

  private getQuery(): {} {
    const strQuery = localStorage.getItem(this.cacheName);

    if (!strQuery) {
      return {};
    }

    return JSON.parse(strQuery);
  }

  // noinspection JSMethodCanBeStatic
  private initProperties(field: NglFilterField, query: any): NglFilterField {
    field.placeholder = field.placeholder || '';
    field.onChange = field.onChange ? field.onChange : (v: any) => v;
    field.options = field.options || {};
    field.size = field.size || this.size();
    field.value = field.value ?? query[field.name];

    if (field.value && field.type === NglFilterFieldType.AMOUNT) {
      field.value = this.amountService.toModel(field.value, field.options.amountRatio);
    }

    return field;
  }

  private updateQuerySize(query: {}): void {
    this.querySize = Object.keys(query).length;
  }
}
