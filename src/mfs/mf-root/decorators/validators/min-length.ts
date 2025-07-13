import {EntityDecoratorManager} from "@components/logics";

/**
 *
 */
export function MinLength(length: number) {
  return function (target: any, key: string) {
      let field = EntityDecoratorManager.getInfo(target, key);
      field.isRequired = true;
      field.validators.minLength = length;
  };
}
