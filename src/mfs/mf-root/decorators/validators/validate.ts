import { EntityDecoratorManager } from "@components/logics";
import { ValidatorFunctionModel } from "@components/logics";

/**
 *
 * @returns
 */
export function Validate(validator: ValidatorFunctionModel, ...args: any[]) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.isRequired = true;
        field.validatorFuncs.push((context) => validator(context, ...args));
    };
}
