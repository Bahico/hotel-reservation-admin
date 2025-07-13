import { EntityDecoratorInfo } from '@components/logics';
import { EntityViewOptions } from '@components/components/entities/entity/entity-view/entity-view-options.model';
import { TranslateService } from '@ngx-translate/core';
import { InjectorInstance } from '@components/root-shared.module';

export default function (
  item: any,
  field: EntityDecoratorInfo
): EntityViewOptions {
  const translate = InjectorInstance.get(TranslateService);

  return {
    value: translate.instant(item[field.name]),
    translation: field.name,
  };
}
