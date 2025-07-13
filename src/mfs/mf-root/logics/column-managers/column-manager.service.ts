import {Injectable, Type} from '@angular/core';
import {BaseColumnComponent} from '@components/components/columns/base-column.component';
import {BooleanColumnComponent} from '@components/components/columns/boolean-column/boolean-column.component';
import {NumberColumnComponent} from '@components/components/columns/number-column/number-column.component';
import {DefaultColumnComponent} from '@components/components/columns/default-column/default-column.component';
import {Comment, EnumNumber, Percentage} from '@components/logics/custom-types/custom-type';
import {PercentageColumnComponent} from '@components/components/columns/percentage-column/percentage-column.component';
import {DateColumnComponent} from '@components/components/columns/date-column/date-column.component';
import {RelationColumnComponent} from '@components/components/columns/relation-column/relation-column.component';
import {EntityRelation} from '@components/logics';
import {
  EnumNumberColumnComponent
} from '@components/components/columns/enum-number-column/enum-number-column.component';

/**
 *
 */
@Injectable({providedIn: "root"})
export class ColumnManagerService {

  /**
   *
   */
  private readonly inputs: Map<Type<any>, Type<BaseColumnComponent>> = new Map([]);

  /**
   *
   */
  constructor() {
    this.inputs.set(Boolean, BooleanColumnComponent);
    this.inputs.set(Number, NumberColumnComponent);
    this.inputs.set(Comment, DefaultColumnComponent);
    this.inputs.set(String, DefaultColumnComponent);
    this.inputs.set(Percentage, PercentageColumnComponent);
    this.inputs.set(Date, DateColumnComponent);
    this.inputs.set(EntityRelation, RelationColumnComponent);
    this.inputs.set(EnumNumber, EnumNumberColumnComponent);
  }

  /**
   *
   * @param type
   */
  getComponent(type: Type<any>) {
    return this.inputs.get(type);
  }
}
