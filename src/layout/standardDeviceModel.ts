import { ScaledSize } from 'react-native';
// eslint-disable-next-line import/no-cycle
import PercentageSize from 'src/layout/size/percentageSize';
// eslint-disable-next-line import/no-cycle
import PixelSize from 'src/layout/size/pixelSize';

export interface StandardDeviceModel {
  getSize(): ScaledSize;
  getDimensionType(): 'window' | 'screen';
  toPixcelFrom(
    percentage: PercentageSize,
    getLengthOf: GetPixcelLengthOf
  ): PixelSize;
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
    percentage: PercentageSize,
    getLengthOf: GetPixcelLengthOf
  ): PixelSize {
    const screenLength: PixelSize = getLengthOf(this.size);
    return screenLength.calculate(percentage);
  }
}

export const standardDeviceModel: StandardDeviceModel = new IPhone11();

export type GetPixcelLengthOf = (scaledSize: ScaledSize) => PixelSize;

export function getWidthOf(scaledSize: ScaledSize): PixelSize {
  return new PixelSize(scaledSize.width, new IPhone11());
}

export function getHeightOf(scaledSize: ScaledSize): PixelSize {
  return new PixelSize(scaledSize.height, new IPhone11());
}
