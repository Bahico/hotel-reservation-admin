import { EntityDecoratorManager } from "@components/logics";
import "reflect-metadata";

/**
 *
 * @returns
 */
export function EditableSelect(selectService: any, isNullable: boolean = false) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.isEditable = true;
        field.type = Reflect.getMetadata("design:type", target, key);
        field.selectService = selectService;
    };
}
