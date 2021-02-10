import Ratio from 'src/layout/device/standardLength/ratio';
import { LengthUnit } from 'src/layout/size/lengthUnit';

export default class Pixel implements LengthUnit {
  protected readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public toString = (): string => {
    return `${this._value.toString()}px`;
  };

  public multiply(ratio: Ratio): Pixel {
    return new Pixel(this._value * ratio.value);
  }
}
