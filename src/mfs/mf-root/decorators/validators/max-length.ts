import {EntityDecoratorManager} from "@components/logics";

/**
 *
 */
export function MaxLength(length: number) {
  return function (target: any, key: string) {
    let field = EntityDecoratorManager.getInfo(target, key);
    field.validators.maxLength = length;
  };
}

