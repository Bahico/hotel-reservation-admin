import {EntityDecoratorManager} from '@components/logics';

export function Size(min: number, max: number) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.validators.max = max;
        field.validators.min = min;
    };
}
