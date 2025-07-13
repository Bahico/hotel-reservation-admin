export interface ValidatorModel {
    minLength?: number;
    maxLength?: number;
    max?: number;
    min?: number;
    pattern?: string | RegExp;
    isEmail?: boolean;
    mask?: MaskModel;
}

export interface MaskModel {
    mask: string;
}
