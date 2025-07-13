import {EntityDecoratorManager} from "@components/logics";

/**
 *
 * @returns
 */
export function Identification(target: any, key: string) {
    let field = EntityDecoratorManager.getInfo(target, key);
    field.identification = true;
    field.isDisplay = true;
    field.isEditable = false;
    field.span = 24;
    field.type = Reflect.getMetadata("design:type", target, key);
}
