import { EnumNumber } from "@components/logics";
import { EntityDecoratorManager } from "@components/logics";

/**
 *
 * @returns
 */
export function EditableEnum(enumType: any, span: number = 8, isNullable: boolean = false) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.isEditable = true;
        field.span = span;
        field.isNullable = isNullable;
        field.type = EnumNumber;
        field.enumType = enumType;
    };
}
