import {EntityDecoratorManager} from '@components/logics';

export function SingleFilter(target: any, key: string) {
    let field = EntityDecoratorManager.getInfo(target, key);
    field.singleFilter = true;
}
