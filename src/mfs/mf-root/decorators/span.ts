import { EntityDecoratorManager } from "@components/logics";

/**
 *
 * @returns
 */
export function Span(span: number = 8) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.span = span;
    };
}
