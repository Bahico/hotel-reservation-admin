import {NglFilterField, NglFilterFieldType} from '@components/filter-field/ngl-filter-field';
import {EntityDecoratorInfo} from '@components/logics';

export default function (field: EntityDecoratorInfo): NglFilterField[] {
    return [
        {
            translation: field.name,
            name: field.name + '.equals',
            type: NglFilterFieldType.SELECT,
            options: {
                items: Object.keys(field.enumType),
                nzLabelTranslation: ''
            }
        }
    ]
}
