// eslint-disable-next-line import/no-cycle
import PercentageSize from 'src/layout/size/percentageSize';

export default class PixelSize {
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

  public calculate(percentage: PercentageSize): PixelSize {
    return new PixelSize(this.value * percentage.value);
  }
}
