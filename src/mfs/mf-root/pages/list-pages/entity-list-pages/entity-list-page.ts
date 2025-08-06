import {Component, inject, Inject, OnDestroy, OnInit, signal, Type, WritableSignal} from '@angular/core';
import {EntityDecoratorInfo, Identified} from "@components/logics";
import {ListManager} from "@components/logics/list-managers/list-manager";
import {EntityFormPage, FilterPage} from '@components/pages';
import {FilterManager, ViewManager} from '@components/field';
import {ActivatedRoute} from '@angular/router';
import {EntityService, MfFormDefaultComponent} from '@components/components/entities';
import {HiddenModel} from './hidden.model';
import {EntityViewOptions} from '@components/components/entities/entity/entity-view/entity-view-options.model';
import {EntityUpdateOptions} from '@components/components';
import {BaseClientCrudService} from '@components/services';

/**
 *
 */
@Component({
  template: ''
})
export abstract class EntityListPage<T extends Identified> extends FilterPage<T> implements OnInit, OnDestroy {
  /**
   *
   */
  protected readonly entityService = inject(EntityService);

  /**
   *
   */
  private readonly viewManager = inject(ViewManager);

  /**
   *
   */
  abstract title: string;

  /**
   *
   */
  formComponent: Type<any> = MfFormDefaultComponent<T>;

  /**
   *
   */
  private readonly filterManager = inject(FilterManager);

  /**
   *
   */
  isDataLoading = signal(true);

  /**
   *
   */
  hidden: WritableSignal<HiddenModel>;

  /**
   *
   */
  protected constructor(
    @Inject(String) public service: BaseClientCrudService<T>,
    @Inject(String) private classType?: T,
    private readonly _activatedRoute?: ActivatedRoute
  ) {
    super()
  }

  /**
   *
   */
  ngOnInit() {
    this.registerToModify(this.service.listModification, () => this.loadData());
    this.handleNavigation(this._activatedRoute);
    this.loadData();
    this.loadFilterFields();
  }

  /**
   *
   */
  ngOnDestroy(): void {
    this.unsubscribe();
  }

  /**
   *
   */
  getColumns(): EntityDecoratorInfo[] {
    return ListManager.getColumns(this.classType);
  }

  /**
   *
   */
  loadData = (page?: number) => {
    this.isDataLoading.set(true);

    this.service
      .getAll(this.getRequestParams(page))
      .pipe(this.loadPageOperators())
      .subscribe({
        next: res => this.onDataReceived(res),
        error: err => this.onGetAllError(err),
        complete: () => this.isDataLoading.set(false)
      })
  }

  /**
   *
   * @param err
   */
  onGetAllError(err: any) {
    this.isDataLoading.set(false);
  }

  /**
   *
   * @param data
   * @param duplicate
   */
  openUpdate = (data?: T, duplicate?: boolean) => {
    const options: EntityUpdateOptions<EntityFormPage<T>> = {
      modalOptions: this.entityService.getModalOption(this.formComponent),
      componentInstances: {
        data: data || {},
        duplicate: duplicate,
      },
    };

    const modalRef = this.entityService.update(options);
    modalRef.componentInstance.service = this.service;
    modalRef.componentInstance.classType = this.classType;
    modalRef.componentInstance.title = this.title;
  }

  /**
   *
   * @param id
   */
  openDelete(id: number): void {
    const options = {
      useFunction: this.service.delete(id),
      event: this.service.listModification,
      alertTranslation: 'data.deletedAlert',
      alertTranslationValue: id,
    };

    this.entityService.delete(options);
  }

  /**
   *
   * @param model
   */
  openView<T>(model: T) {
    const views: EntityViewOptions[] = [];

    for (const field of ListManager.getColumns(this.classType)) {
      views.push(
        this.viewManager.getFunction(field.type)(model, field)
      )
    }

    this.entityService.view(views, model['id']);
  }

  /**
   *
   */
  loadFilterFields() {
    for (const field of this.getColumns()) {
      this.filterFields.push(...this.filterManager.getFunction(field.type)(field))
    }
  }
}
