import { EntityDecoratorManager } from "@components/logics";
import {BaseEntityModel} from '@components/models';

/**
 *
 * @returns
 */
export function Email(target: BaseEntityModel, key: string) {
    const field = EntityDecoratorManager.getInfo(target, key);
    field.validators.isEmail = true;
}
