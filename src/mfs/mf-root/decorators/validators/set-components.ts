import {EntityDecoratorManager} from "@components/logics";
import {Type} from '@angular/core';
import {BaseColumnComponent, BaseInput} from '@components/components';

/**
 *
 */
export function SetComponents(components: {
  list?: Type<BaseColumnComponent>;
  form?: Type<BaseInput>;
}) {
  return function (target: any, key: string) {
    let field = EntityDecoratorManager.getInfo(target, key);
    field.components = components;
  };
}
