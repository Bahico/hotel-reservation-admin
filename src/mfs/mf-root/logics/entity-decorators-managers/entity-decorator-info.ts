import {Type} from "@angular/core";
import {ValidatorFunctionModel} from '@components/logics';
import {ValidatorModel} from '@components/logics';
import {EntityRelation} from '@components/logics';
import {BaseColumnComponent, BaseInput} from '@components/components';

/**
 *
 */
export class EntityDecoratorInfo {

  /**
   *
   */
  name: string;

  /**
   *
   */
  identification: boolean;

  /**
   *
   */
  title: string;

  /**
   *
   */
  isDisplay: boolean;

  /**
   *
   */
  isEditable: boolean;

  /**
   *
   */
  isNotUpdatable: boolean;

  /**
   *
   */
  isRequired: boolean;

  /**
   *
   */
  validators: ValidatorModel = {};

  /**
   *
   */
  validatorFuncs: ValidatorFunctionModel[];

  /**
   *
   */
  selectService: any;

  /**
   *
   */
  relation?: EntityRelation;

  /**
   *
   */
  enumType: Type<any>;

  /**
   *
   */
  type: any;

  /**
   *
   */
  notCode: boolean;

  /**
   *
   */
  singleFilter: boolean;

  /**
   * min 1; max 12
   */
  span: number = 8;

  /**
   * for date show time
   */
  showTime: boolean;

  /**
   * components: list and form
   */
  components?: {
    list?: Type<BaseColumnComponent>;
    form?: Type<BaseInput>;
  }
}
