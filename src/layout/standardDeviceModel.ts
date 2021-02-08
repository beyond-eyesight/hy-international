import { ScaledSize } from 'react-native';
import PercentageLength from 'src/layout/length/percentageLength';
import PixelLength from 'src/layout/length/pixelLength';

export interface StandardDeviceModel {
  getSize(): ScaledSize;
  getDimensionType(): 'window' | 'screen';
  toPixcelFrom(
    percentage: PercentageLength,
    getLengthOf: GetPixcelLengthOf
  ): PixelLength;
}

class IPhone11 implements StandardDeviceModel {
  private readonly _width = 414;

  private readonly _height = 896;

  private readonly _scale = 2;

  private readonly _fontScale = 1;

  private readonly _dimensionType: 'window' | 'screen' = 'screen';

  private size: ScaledSize = {
    width: this._width,
    height: this._height,
    scale: this._scale,
    fontScale: this._fontScale
  };

  getSize(): ScaledSize {
    return this.size;
  }

  getDimensionType(): 'window' | 'screen' {
    return this._dimensionType;
  }

  toPixcelFrom(
    percentage: PercentageLength,
    getLengthOf: GetPixcelLengthOf
  ): PixelLength {
    const screenLength: PixelLength = getLengthOf(this.size);
    return screenLength.calculate(percentage);
  }
}

export const standardDeviceModel: StandardDeviceModel = new IPhone11();

export type GetPixcelLengthOf = (scaledSize: ScaledSize) => PixelLength;

export function getWidthOf(scaledSize: ScaledSize): PixelLength {
  return new PixelLength(scaledSize.width);
}

export function getHeightOf(scaledSize: ScaledSize): PixelLength {
  return new PixelLength(scaledSize.height);
}
