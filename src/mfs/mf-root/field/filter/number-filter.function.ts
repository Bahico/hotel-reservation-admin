import {NglFilterField, NglFilterFieldType} from '@components/filter-field/ngl-filter-field';
import {EntityDecoratorInfo} from '@components/logics';

export default function (field: EntityDecoratorInfo): NglFilterField[] {
    if (field.singleFilter) {
        return [
            {
                translation: field.name,
                name: field.name + '.equals',
                type: NglFilterFieldType.NUMBER
            }
        ]
    }
    return [
        {
            translation: field.name,
            name: field.name + '.greaterThanOrEqual',
            nextTranslate: 'from',
            type: NglFilterFieldType.NUMBER
        },
        {
            translation: field.name,
            name: field.name + '.lessThanOrEqual',
            nextTranslate: 'to',
            type: NglFilterFieldType.NUMBER
        },
    ]
}
