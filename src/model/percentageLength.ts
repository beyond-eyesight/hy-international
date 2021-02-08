// eslint-disable-next-line import/no-cycle
import PixelLength from 'src/model/pixelLength';

export default class PercentageLength {
  private readonly _value: number;

  // todo: validation logic and test
  constructor(value: number) {
    this._value = value;
  }

  public static calculate(
    numerator: PixelLength,
    denominator: PixelLength
  ): PercentageLength {
    return new PercentageLength(numerator.value / denominator.value);
  }

  get value(): number {
    return this._value;
  }

  public toString = (): string => {
    return `${(this._value * 100).toString()}%`;
  };
}
