import {EntityDecoratorManager} from "@components/logics";

/**
 *
 */
export function Max(length: number) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.validators.max = length;
    };
}
