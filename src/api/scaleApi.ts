import { Dimensions, ScaledSize } from 'react-native';
import {
  GetPixcelLengthOf,
  standardDeviceModel,
  StandardDeviceModel
} from 'src/layout/standardDeviceModel';
import PercentageSize from 'src/layout/size/percentageSize';
import PixelSize from 'src/layout/size/pixelSize';

export default class ScaleApi {
  private standardDeviceModel: StandardDeviceModel = standardDeviceModel;

  public scale(
    percentageLength: PercentageSize,
    getLengthOf: GetPixcelLengthOf
  ): PixelSize {
    const pixelLength = this.standardDeviceModel.toPixcelFrom(
      percentageLength,
      getLengthOf
    );

    return this.refine(pixelLength, getLengthOf);
  }

  private refine(
    pixelLength: PixelSize,
    ratioStandardGetter: GetPixcelLengthOf
  ): PixelSize {
    const currentModelSize: ScaledSize = this.getCurrentModelSize();
    const ratio: PercentageSize = this.calculateModelLengthRatio(
      currentModelSize,
      ratioStandardGetter
    );

    return pixelLength.calculate(ratio);
  }

  private calculateModelLengthRatio(
    currentModelSize: ScaledSize,
    lengthGetter: GetPixcelLengthOf
  ): PercentageSize {
    const standardModelSize = this.standardDeviceModel.getSize();
    return PercentageSize.calculate(
      lengthGetter(currentModelSize),
      lengthGetter(standardModelSize)
    );
  }

  private getCurrentModelSize(): ScaledSize {
    return Dimensions.get(this.standardDeviceModel.getDimensionType());
  }
}
