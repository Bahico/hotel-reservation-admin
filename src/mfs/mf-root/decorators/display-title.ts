import { EntityDecoratorManager } from "@components/logics";

/**
 *
 * @returns
 */
export function DisplayTitle(title: string ) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.title = title;
    };
}
