import {
  Display,
  Editable,
  Identification,
  LengthSize,
  Mask,
  MaxLength,
  MinLength,
  Required,
  SingleFilter,
  Span
} from '@components/decorators';
import { NotCode } from '@components/decorators/not-code';

/**
 *
 */
export class PositionModel {

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
  @Span(12)
  @Mask({mask: "0*"})
  @LengthSize(1, 5)
  @SingleFilter
  @NotCode
  code: number;

  /**
   *
   */
  @Display
  @Editable
  @Span(12)
  @MaxLength(500)
  @MinLength(1)
  @Required
  name: string;
}
