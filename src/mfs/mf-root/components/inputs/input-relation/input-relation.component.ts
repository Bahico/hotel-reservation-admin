import {Component, computed, OnDestroy, OnInit, signal} from '@angular/core';
import {BaseInput} from '../base/base-input';
import {EntityRelationService} from '@components/decorators';
import {InjectorInstance} from '@components/root-shared.module';
import {NzOptionComponent, NzSelectComponent} from 'ng-zorro-antd/select';
import {TranslateModule} from '@ngx-translate/core';
import {ValidatorComponent} from '../../validator/validator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {finalize, takeUntil} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {ITEMS_PER_PAGE} from '@components/config';

/**
 *
 */
@Component({
  imports: [
    NzOptionComponent,
    NzSelectComponent,
    TranslateModule,
    ValidatorComponent,
    ReactiveFormsModule
  ],
  templateUrl: 'input-relation.component.html',
  selector: 'input-relation'
})
export class InputRelationComponent extends BaseInput implements OnInit, OnDestroy {
  /**
   *
   * @protected
   */
  protected service: EntityRelationService<any>;

  /**
   *
   * @protected
   */
  protected readonly destroy$ = new Subject<void>();

  /**
   *
   */
  data = signal<any[]>([]);

  /**
   *
   */
  loading = signal(false);

  /**
   *
   */
  mode = computed(()=> this.info().relation.multi ?  'multiple' : 'default' );

  /**
   *
   */
  compareFn = (o1: any, o2: any): boolean => {
    if (!o1 || !o2) {
      return false;
    }

    return o1['id'] === o2['id'];
  };

  ngOnInit(): void {
    this.service = InjectorInstance.get(this.info().relation.service);

    if (!this.info().relation.key && this.control().value) {
      this.data.update(items => {
        if (this.info().relation.multi) {
          this.onSearch('');
          return  [...items, ...this.control().value]
        }
        return [...items, this.control().value]
      })

    }
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   *
   */
  onSearch(text: string) {
    this.loading.set(true);

    this.service
      .getAll(this.getQuery(text))
      .pipe(this.pipeOperators())
      .subscribe(data => {
        this.data.set(data.body);
      })
  }

  /**
   *
   */
  pipeOperators() {
    return (source$: Observable<HttpResponse<any[]>>) =>
      source$.pipe(
        finalize(() => (this.loading.set(false))),
        takeUntil(this.destroy$)
      );
  }

  /**
   *
   */
  getQuery(text: string) {
    return {
      [`${this.info().relation.label}.contains`]: text,
      page: 0,
      size: ITEMS_PER_PAGE,
      ...this.info().relation.param
    }
  }

  /**
   *
   * @param entity
   */
  getLabel(entity: any) {
    let label = entity[this.info().relation.label];

    if (this.info().relation.suffix) {
      label = label + " " + entity[this.info().relation.suffix]
    }

    if (this.info().relation.prefix) {
      label = entity[this.info().relation.prefix] + " " + label
    }

    return label
  }
}
