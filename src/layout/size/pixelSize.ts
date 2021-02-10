// eslint-disable-next-line import/no-cycle
import PercentageSize from 'src/layout/size/percentageSize';
import { Size } from 'src/layout/size/size';
// eslint-disable-next-line import/no-cycle
import { StandardDeviceModel } from 'src/layout/standardDeviceModel';

export default class PixelSize implements Size {
  private readonly _value: number;

  private readonly _standardDeviceModel: StandardDeviceModel;

  constructor(value: number, standardDeviceModel: StandardDeviceModel) {
    this._value = value;
    this._standardDeviceModel = standardDeviceModel;
  }

  get value(): number {
    return this._value;
  }

  public toString = (): string => {
    return `${this._value.toString()}px`;
  };

  public calculate(percentage: PercentageSize): PixelSize {
    return new PixelSize(
      this._value * percentage.value,
      this._standardDeviceModel
    );
  }
}
