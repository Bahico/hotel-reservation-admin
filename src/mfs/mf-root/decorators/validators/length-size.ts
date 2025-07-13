import {EntityDecoratorManager} from '@components/logics';

export function LengthSize(minLength: number, maxLength: number) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.validators.maxLength = maxLength;
        field.validators.minLength = minLength;
    };
}
