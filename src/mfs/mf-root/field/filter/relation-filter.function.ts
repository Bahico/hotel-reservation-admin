import {NglFilterField, NglFilterFieldType} from '@components/filter-field/ngl-filter-field';
import {EntityDecoratorInfo} from '@components/logics';
import {InjectorInstance} from '@components/root-shared.module';

export default function (field: EntityDecoratorInfo): NglFilterField[] {
    return [
        {
            name: field.name + capitalizeFirstLetter(field.relation.filterField || field.relation.key || 'id') + ".equals",
            translation: field.name,
            type: NglFilterFieldType.SELECT,
            options: {
                resourceUrl: InjectorInstance.get(field.relation.service).resourceUrl,
                nzLabel: field.relation.label,
                nzValue: field.relation.key || 'id'
            }
        }
    ]
}

const capitalizeFirstLetter = (val: string) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
}
