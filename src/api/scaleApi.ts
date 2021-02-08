import {
  LengthGetter,
  standardDeviceModel,
  StandardDeviceModel
} from 'src/utils/device';
import { Dimensions, ScaledSize } from 'react-native';

export default class ScaleApi {
  private standardDeviceModel: StandardDeviceModel = standardDeviceModel;

  public calculateRefinedLength(length: number, lengthGetter: LengthGetter) {
    const currentModelSize: ScaledSize = this.getCurrentModelSize();
    const ratio: number = this.calculateModelLengthRatio(
      currentModelSize,
      lengthGetter
    );

    return length * ratio;
  }

  private calculateModelLengthRatio(
    currentModelSize: ScaledSize,
    lengthGetter: LengthGetter
  ) {
    const standardModelSize = this.standardDeviceModel.getSize();
    return lengthGetter(currentModelSize) / lengthGetter(standardModelSize);
  }

  private getCurrentModelSize(): ScaledSize {
    return Dimensions.get(this.standardDeviceModel.getDimensionType());
  }
}
