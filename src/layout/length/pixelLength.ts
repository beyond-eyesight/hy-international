// eslint-disable-next-line import/no-cycle
import PercentageLength from 'src/layout/length/percentageLength';

export default class PixelLength {
  private readonly _value: number;

  get value(): number {
    return this._value;
  }

  constructor(value: number) {
    this._value = value;
  }

  public toString = (): string => {
    return `${this._value.toString()}px`;
  };

  public calculate(percentage: PercentageLength): PixelLength {
    return new PixelLength(this.value * percentage.value);
  }
}
