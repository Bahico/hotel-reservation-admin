import { RowAction } from "../../helpers/row-action";
import { Identified } from "../entities/identified";

/**
 * 
 */
export class RowInfo implements Identified {

    /**
     * 
     */
    id: number;

    /**
     * 
     */
    rowAction: RowAction;

    /**
     * 
     */
    rowNumber: number;

    /**
     * 
     */
    key: number;
}