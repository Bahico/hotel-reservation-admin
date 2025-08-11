import {Display, Editable, Identification, Min, Relation, Required, Span} from '@components/decorators';
import { HotelModel } from '../../hotel/models/hotel.model';
import { HotelService } from '../../hotel/services/hotel.service';
import { RoomTypeModel } from '../../room-type/models/room-type.model';
import { RoomTypeService } from '../../room-type/services/room-type.service';

/**
 *
 */
export class RoomModel {

  /**
   *
   */
  @Identification
  id: number;

  /**
   *
   */
  @Display
  @Editable
  @Span(24)
  @Required
  @Min(1)
  number: number;

  /**
   *
   */
  @Relation({
    service: HotelService,
    label: 'name'
  })
  @Display
  @Editable
  @Required
  @Span(12)
  hotel: HotelModel;

  /**
   *
   */
  @Relation({
    service: RoomTypeService,
    label: 'name'
  })
  @Display
  @Editable
  @Required
  @Span(12)
  type: RoomTypeModel;


  @Display
  @Span(24)
  image: string
}
