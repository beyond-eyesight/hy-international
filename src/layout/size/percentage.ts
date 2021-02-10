import { LengthUnit } from 'src/layout/size/lengthUnit';

// 범위 1~100
export default class Percentage implements LengthUnit {
  private readonly _value: number;

  // todo: validation logic and test
  constructor(value: number) {
    this._value = value;
  }

  get value(): number {
    return this._value;
  }

  public toString = (): string => {
    return `${this._value.toString()}%`;
  };
}
