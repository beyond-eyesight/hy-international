import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';
import PercentageLength from 'src/model/percentageLength';
import PixelLength from 'src/model/pixelLength';

export const isIOS = Platform.OS === 'ios';
export const isNotAndroid = Platform.OS !== 'android';

const dimension = Dimensions.get('window');

export const getStatusBarHeight = (isSafe: boolean) => {
  return Platform.select({
    android: getAndroidStatusBarHeight,
    ios: getIosStatusBarHeight(isSafe)
  });
};

export const getAndroidStatusBarHeight = (() => {
  if (isNotAndroid) {
    return 0;
  }
  return StatusBar.currentHeight;
})();

export const isIphoneX =
  Platform.OS === 'ios' &&
  (dimension.height === 812 ||
    dimension.width === 812 ||
    dimension.height === 896 ||
    dimension.width === 896);

const getIphoneXStatusBarHeight = (isSafe: boolean) => {
  return isSafe ? 44 : 30;
};

const getIosStatusBarHeight = (isSafe: boolean) => {
  if (isIphoneX) {
    return getIphoneXStatusBarHeight(isSafe);
  }
  if (isIOS && !isIphoneX) {
    return 20;
  }

  return 0;
};

// todo: 얘를 빈으로 만들기
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
