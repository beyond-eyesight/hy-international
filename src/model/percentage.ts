export default class Percentage {
  private readonly _value: number;

  // todo: validation logic and test
  constructor(value: number) {
    this._value = value;
  }

  public toString = (): string => {
    return this._value.toString();
  };
}
