import {EntityDecoratorManager} from "@components/logics";
import "reflect-metadata";

/**
 * need first stay
 * @returns
 */
export function Display(target: any, key: string) {
  let field = EntityDecoratorManager.getInfo(target, key);
  field.isDisplay = true;
  field.type = Reflect.getMetadata("design:type", target, key);
}
