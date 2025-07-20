import {Type} from "@angular/core";
import {ValidatorFunctionModel} from '@components/logics';
import {ValidatorModel} from '@components/logics';
import {EntityRelation} from '@components/logics';

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
  isNullable: boolean;

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
  span: number;

  /**
   * for date show time
   */
  showTime: boolean;
}
