import {EntityRelationService} from '@components/decorators';
import {Type} from '@angular/core';

export class EntityRelation {
  service: Type<EntityRelationService<any>>;
  key?: string;
  label: string;
  prefix?: string;
  suffix?: string;
  filterField?: string;
  param?: any;
  multi?: boolean;
}
