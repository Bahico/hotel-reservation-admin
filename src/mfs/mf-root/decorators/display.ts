import {EntityDecoratorManager} from "@components/logics";
import "reflect-metadata";

/**
 *
 * @returns
 */
export function Display(type: string = '') {
  return function (target: any, key: string) {
    let field = EntityDecoratorManager.getInfo(target, key);
    field.isDisplay = true;
    field.type = type ? type : Reflect.getMetadata("design:type", target, key);
  };
}
