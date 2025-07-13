import {Params} from '@angular/router';
import {BooleanBadgeType} from '../../../../directive/bm-boolean-badge.directive';

export class EntityViewElementOptions {
    routerLink?: string;
    styles?: string;
    queryParams?: Params;
    labelField?: string;
    valueField?: string;
}

type Type =
    | 'date' // string
    | 'mask' // string | [string, IConfig['patterns']]
    | 'translation' // string
    | 'link' // null
    | 'object' // null
    | 'boolean' // BooleanBadgeType
    | 'json'
    | 'image-url' // null
    | 'images-url' // null
    | 'button'
    | 'array'
    | 'big-text';

export class EntityViewOptions {
    title?: string;
    value: any | HTMLElement;
    type?: Type;
    date?: string;
    mask?: string;
    amountRatio?: number;
    translation?: string;
    link?: (v: EntityViewOptions) => void;
    boolean?: BooleanBadgeType;
    options?: EntityViewElementOptions;
}
