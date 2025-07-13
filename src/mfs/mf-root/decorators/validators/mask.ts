import {EntityDecoratorManager} from '@components/logics';
import {MaskModel} from '@components/logics';

export function Mask(mask: MaskModel) {
    return function (target: any, key: string) {
        let field = EntityDecoratorManager.getInfo(target, key);
        field.validators.mask = mask;
    };
}
