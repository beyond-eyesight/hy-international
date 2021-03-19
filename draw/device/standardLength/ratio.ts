// eslint-disable-next-line import/no-cycle
import Percentage from 'src/draw/size/percentage';

export default class Ratio {
  private readonly _value: number;

  // todo: validation logic - 0~1
  constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  static from(percentage: Percentage) {
    return new Ratio(percentage.value / 100);
  }
}
