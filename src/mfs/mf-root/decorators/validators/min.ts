import {EntityDecoratorManager} from "@components/logics";

/**
 *
 */
export function Min(length: number) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.isRequired = true;
        field.validators.min = length;
    };
}
