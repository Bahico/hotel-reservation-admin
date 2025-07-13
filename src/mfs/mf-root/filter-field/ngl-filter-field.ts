import {EventEmitter} from "@angular/core";

export enum NglFilterFieldType {
  UUID = 'UUID',
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  DATE = 'DATE',
  DATE_RANGE = 'DATE_RANGE',
  SELECT = 'SELECT',
  MULTI_SELECT = 'MULTI_SELECT',
  AMOUNT = 'AMOUNT'
}

type Options = {
  mask?: string;
  nzLabelTranslation?: string;
  nzLabel?: string;
  nzValue?: string;
  nzShowSearch?: boolean;
  resourceUrl?: string;
  items?: any;
  nzMaxTagCount?: number;
  nzOptionOverflowSize?: number;
  nzOnSearch?: EventEmitter<string>;
  nzInputReadOnly?: boolean;
  nzFormat?: string;
  nzShowTime?: boolean;
  nzTime?: { hours?: number, minutes?: number, seconds?: number };
  nzFromToDate? : boolean,
  nzMin?: number;
  nzMax?: number;
  amountRatio?: number;
}

export class NglFilterField {
  name: string;
  type: NglFilterFieldType;
  translation?: string;
  nextTranslate?: string;
  value?: any;
  options?: Options;
  placeholder?: string;
  size?: 'large' | 'small';
  onChange?: (value: any) => void;
  fieldNames?: any;
}
