import {Inject} from "@angular/core";

export enum EntitySelectTypes {
    MULTI = "MULTI",
    SINGLE = "SINGLE"
}

export class EntitySelectModel<ENTITY_MODEL> {
    mode: EntitySelectTypes;
    data: ENTITY_MODEL[] | ENTITY_MODEL;

    constructor(@Inject(String) public classType?: ENTITY_MODEL) {}
}
