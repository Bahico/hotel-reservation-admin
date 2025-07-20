import {EntityDecoratorManager} from "@components/logics";
import "reflect-metadata";

/**
 *
 * @returns
 */
export function ShowTime(target: any, key: string) {
  let field = EntityDecoratorManager.getInfo(target, key);
  field.showTime = true;
}
