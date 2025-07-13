import {EntityDecoratorManager} from "@components/logics";


/**
 *
 * @returns
 */
export function NotCode(target: any, key: string) {
    let field = EntityDecoratorManager.getInfo(target, key);
    field.notCode = true;
}
