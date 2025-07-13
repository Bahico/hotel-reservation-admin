import {BaseEntityModel} from '@components/models';

/**
 *
 */
export interface Ownerable extends BaseEntityModel {

    /**
     *
     */
    ownerId: number | string;
}
