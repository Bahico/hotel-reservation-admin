import { EntityDecoratorManager } from "@components/logics";

/**
 *
 * @returns
 */
export function Required(target: any, key: string) {
    const field = EntityDecoratorManager.getInfo(target, key);
    field.isRequired = true;
}
