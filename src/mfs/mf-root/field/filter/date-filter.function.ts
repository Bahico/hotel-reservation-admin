import {NglFilterField, NglFilterFieldType} from '@components/filter-field/ngl-filter-field';
import {EntityDecoratorInfo} from '@components/logics';

export default function (field: EntityDecoratorInfo): NglFilterField[] {
    return [
        {
            translation: field.name,
            name: field.name + '.greaterThanOrEqual',
            nextTranslate: 'from',
            type: NglFilterFieldType.DATE
        },
        {
            translation: field.name,
            name: field.name + '.lessThanOrEqual',
            nextTranslate: 'to',
            type: NglFilterFieldType.DATE
        },
    ]
}
