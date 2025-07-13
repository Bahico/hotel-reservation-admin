import { EntityDecoratorManager } from "@components/logics";
import "reflect-metadata";

/**
 *
 * @returns
 */
export function Editable(span: number = 8, type: string = '') {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.isEditable = true;
        field.span = span;
        field.type = type ? type : Reflect.getMetadata("design:type", target, key);
    };
}
