import { EntityDecoratorManager } from "@components/logics";

/**
 *
 * @returns
 */
export function NotUpdatable(target: any, key: string) {
  const field = EntityDecoratorManager.getInfo(target, key);
  field.isNotUpdatable = true;
}
