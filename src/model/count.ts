export default class Count {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public toString = (): string => {
    return this._value.toString();
  };
}
