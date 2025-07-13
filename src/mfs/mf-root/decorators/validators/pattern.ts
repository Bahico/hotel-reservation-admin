import {EntityDecoratorManager} from "@components/logics";

/**
 *
 */
export function Pattern(pattern: string | RegExp) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.validators.pattern = pattern;
    };
}
