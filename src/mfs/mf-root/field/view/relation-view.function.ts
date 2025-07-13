import {EntityDecoratorInfo} from '@components/logics';
import {EntityViewOptions} from '@components/components/entities/entity/entity-view/entity-view-options.model';
import {InjectorInstance} from '@components/root-shared.module';

export default function (item: any, field: EntityDecoratorInfo): EntityViewOptions {
    return {
        value: item[field.name] ? (field.relation.key ? item[field.name] : item[field.name][field.relation.label]) : null,
        type: field.relation.key ? undefined : "link",
        // link: () => InjectorInstance.get(field.relation.service).openView(item[field.name]),
        translation: field.name
    }
}
