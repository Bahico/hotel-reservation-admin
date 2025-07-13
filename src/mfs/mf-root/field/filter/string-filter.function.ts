import {NglFilterField, NglFilterFieldType} from '@components/filter-field/ngl-filter-field';
import {EntityDecoratorInfo} from '@components/logics';

export default function (field: EntityDecoratorInfo): NglFilterField[] {
    return [
        {
            name: field.name + ".contains",
            translation: field.name,
            type: NglFilterFieldType.TEXT
        }
    ]
}
