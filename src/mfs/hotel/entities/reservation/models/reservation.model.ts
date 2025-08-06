import {Display, Editable, EditableEnum, Identification, Relation, Required, Span} from '@components/decorators';
import { ReservationStatus } from './reservation.status';
import { RoomService } from '../../room/services/room.service';
import { RoomModel } from '../../room/models/room.model';
import {ReservationUserModel} from 'hotel/entities/reservation-user/models/reservation-user.model';
import {ReservationUserService} from 'hotel/entities/reservation-user/services/reservation-user.service';
import {ShowTime} from '@components/decorators/show-time';
import {SetComponents} from '@components/decorators/validators/set-components';
import {ReservationCheckRange} from 'hotel/entities/reservation/update/inputs/reservation-check-range';

/**
 *
 */
export class ReservationModel {

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
  @Required
  @ShowTime
  @Span(0)
  checkInDate: Date;

  /**
   *
   */
  @Display
  @Editable
  @Required
  @ShowTime
  @Span(16)
  @SetComponents({form: ReservationCheckRange})
  checkOutDate: Date;

  /**
   *
   */
  @Display
  @Editable
  @Required
  totalPrice: number;

  /**
   *
   */
  @EditableEnum(ReservationStatus)
  @Display
  @Required
  status: ReservationStatus;

  /**
   *
   */
  @Relation({
    service: RoomService,
    label: 'number'
  })
  @Display
  @Editable
  @Required
  room: RoomModel;

  /**
   *
   */
  @Relation({
    service: ReservationUserService,
    label: 'name'
  })
  @Display
  @Editable
  @Required
  user: ReservationUserModel;
}
