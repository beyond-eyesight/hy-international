export default class PixelLength {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public toString = (): string => {
    return `${this._value.toString()}px`;
  };
}
