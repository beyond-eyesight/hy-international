import Percentage from 'src/draw/size/percentage';

export default class Pixel {
  protected readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public toString = (): string => {
    return `${this._value.toString()}px`;
  };

  public multiply(percentage: Percentage): Pixel {
    return new Pixel(this._value * (percentage.value / 100));
  }
}
