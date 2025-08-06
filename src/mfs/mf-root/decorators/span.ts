import { EntityDecoratorManager } from "@components/logics";

/**
 *
 * @param span min 1 max 12
 * @constructor
 */
export function Span(span: number = 8) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.span = span;
    };
}
