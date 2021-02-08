import { Dimensions, ScaledSize } from 'react-native';
import {
  GetPixcelLengthOf,
  standardDeviceModel,
  StandardDeviceModel
} from 'src/layout/standardDeviceModel';
import PercentageLength from 'src/layout/length/percentageLength';
import PixelLength from 'src/layout/length/pixelLength';

export default class ScaleApi {
  private standardDeviceModel: StandardDeviceModel = standardDeviceModel;

  public scale(
    percentageLength: PercentageLength,
    getLengthOf: GetPixcelLengthOf
  ): PixelLength {
    const pixelLength = this.standardDeviceModel.toPixcelFrom(
      percentageLength,
      getLengthOf
    );

    return this.refine(pixelLength, getLengthOf);
  }

  private refine(
    pixelLength: PixelLength,
    ratioStandardGetter: GetPixcelLengthOf
  ): PixelLength {
    const currentModelSize: ScaledSize = this.getCurrentModelSize();
    const ratio: PercentageLength = this.calculateModelLengthRatio(
      currentModelSize,
      ratioStandardGetter
    );

    return pixelLength.calculate(ratio);
  }

  private calculateModelLengthRatio(
    currentModelSize: ScaledSize,
    lengthGetter: GetPixcelLengthOf
  ): PercentageLength {
    const standardModelSize = this.standardDeviceModel.getSize();
    return PercentageLength.calculate(
      lengthGetter(currentModelSize),
      lengthGetter(standardModelSize)
    );
  }

  private getCurrentModelSize(): ScaledSize {
    return Dimensions.get(this.standardDeviceModel.getDimensionType());
  }
}
