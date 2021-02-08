// eslint-disable-next-line import/no-cycle
import PixelSize from 'src/layout/size/pixelSize';

export default class PercentageSize {
  private readonly _value: number;

  // todo: validation logic and test
  constructor(value: number) {
    this._value = value;
  }

  public static calculate(
    numerator: PixelSize,
    denominator: PixelSize
  ): PercentageSize {
    return new PercentageSize(numerator.value / denominator.value);
  }

  get value(): number {
    return this._value;
  }

  public toString = (): string => {
    return `${(this._value * 100).toString()}%`;
  };
}
