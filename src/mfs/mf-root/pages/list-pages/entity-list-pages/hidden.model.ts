export interface HiddenModel {
    filter?: boolean;
    create?: boolean;
    update?: boolean;
    delete?: boolean;
    view?: boolean;
    copy?: boolean;
}

export type Authorities = {
    [key in keyof HiddenModel]: string | string[];
}
