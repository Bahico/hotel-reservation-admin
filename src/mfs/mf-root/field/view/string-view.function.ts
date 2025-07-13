import {EntityDecoratorInfo} from '@components/logics';
import {EntityViewOptions} from '@components/components/entities/entity/entity-view/entity-view-options.model';

export default function (item: any, field: EntityDecoratorInfo): EntityViewOptions {
    return {
        value: item[field.name],
        type: 'big-text',
        translation: field.name
    }
}
