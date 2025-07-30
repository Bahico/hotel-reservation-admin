import {Component, computed, EventEmitter, inject, Inject, OnInit, signal} from "@angular/core";
import {EntityDecoratorInfo} from "@components/logics";
import {Router} from '@angular/router';
import {ListManager} from '@components/logics';
import {BaseEntityModel} from '@components/models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzModalRef} from 'ng-zorro-antd/modal';

/**
 *
 */
@Component({
  template: ''
})
export abstract class BaseFormPage<T extends BaseEntityModel> implements OnInit {

  /**
   *
   */
  router = inject(Router);

  /**
   *
   */
  data: Partial<T> = {};

  /**
   *
   */
  duplicate: boolean;

  /**
   *
   */
  isDataLoading = signal(false);

  /**
   *
   */
  isSubmitting = signal(false);

  /**
   *
   */
  onEntityLoaded: EventEmitter<any> = new EventEmitter();

  /**
   *
   */
  modalRef: NzModalRef;

  /**
   * reactive form field group
   */
  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null)
  });

  /**
   *
   */
  touched = signal(false);

  /**
   *
   */
  isDisabled = computed(() => this.isDataLoading() || this.isSubmitting())

  /**
   *
   */
  protected constructor(
    @Inject(String) protected classType?: T
  ) {
  }

  /**
   *
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   *
   */
  createForm() {
    for (const field of this.getFields()) {
      this.addFieldToFormGroup(field)
    }
    if (this.data && this.data.id) {
      this.disableControls();
      this.formGroup.patchValue({
        // ...this.data,
        id: this.duplicate ? null : this.data.id
      })
    }
  }

  /**
   *
   */
  disableControls() {
    for (const field of this.getFields().filter(item => item.isNotUpdatable)) {
      this.formGroup.get(field.name).disable();
    }
  }

  /**
   *
   * @returns EntityDecoratorInfo[]
   */
  getFields(): EntityDecoratorInfo[] {
    return ListManager.getColumnsForUpdate(this.classType);
  }

  /**
   *
   * @param res
   * @param key
   */
  onGetCodeSuccess(res: bigint, key: string): void {
    this.formGroup.get('code').setValue(<any>res);
    localStorage.setItem(key, res.toString());
  }

  /**
   *
   * @param err
   */
  onGetEntityError(err: any): void {
    this.isDataLoading.set(false);
  }

  /**
   *
   * @param field
   */
  addFieldToFormGroup(field: EntityDecoratorInfo) {
    const validators = [];
    if (field.isRequired) {
      validators.push(Validators.required)
    }
    if (field.validators.max) {
      validators.push(Validators.max(field.validators.max))
    }
    if (field.validators.min) {
      validators.push(Validators.min(field.validators.min))
    }
    if (field.validators.minLength) {
      validators.push(Validators.minLength(field.validators.minLength))
    }
    if (field.validators.maxLength) {
      validators.push(Validators.maxLength(field.validators.maxLength))
    }
    if (field.validators.pattern) {
      validators.push(Validators.pattern(field.validators.pattern))
    }
    if (field.validators.isEmail) {
      validators.push(Validators.email)
    }

    this.formGroup.addControl(field.name, new FormControl(this.data[field.name], validators));

    if (field.identification || !field.isEditable) {
      this.formGroup.get(field.name).disable();
    }
  }

  /**
   *
   */
  modalClose(data?: T) {
    this.modalRef.close(data);
  }

  /**
   *
   */
  checkForm() {
    console.log(this.formGroup.errors, this.formGroup)
    if (this.formGroup.invalid) {
      this.touched.set(true);
      return false;
    }
    return true;
  }
}
