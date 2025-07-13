import {Injectable} from '@angular/core';
import {BaseClientCrudService} from '@components/services/base-client-crud.service';
import {PositionModel} from '../model/position.model';

@Injectable()
export class PositionService extends BaseClientCrudService<PositionModel> {
    /**
     *
     */
    listModification =  'position';

    /**
     *
     */
    constructor() {
        super(new PositionModel(), 'api/positions', 'staffms');
    }
}
