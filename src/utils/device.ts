import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';

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

export function calculateRefinedLength(
  length: number,
  lengthGetter: LengthGetter
): number {
  const standardModel: StandardModel = new IPhone11();
  const currentModelSize: ScaledSize = getCurrentModelSize();
  const ratio: number = calculateModelLengthRatio(
    currentModelSize,
    standardModel.getSize(),
    lengthGetter
  );
  return length * ratio;
}

function getCurrentModelSize(): ScaledSize {
  return Dimensions.get('screen');
}

function calculateModelLengthRatio(
  currentModelSize: ScaledSize,
  standardModelSize: ScaledSize,
  lengthGetter: LengthGetter
) {
  return lengthGetter(currentModelSize) / lengthGetter(standardModelSize);
}

// todo: 얘를 빈으로 만들기
interface StandardModel {
  getSize(): ScaledSize;
}

class IPhone11 implements StandardModel {
  private fontScale: number = 1;

  private height: number = 896;

  private scale: number = 2;

  private width: number = 414;

  getSize(): ScaledSize {
    return {
      width: this.width,
      height: this.height,
      scale: this.scale,
      fontScale: this.fontScale
    };
  }
}

type LengthGetter = (scaledSize: ScaledSize) => number;

function widthGetter(scaledSize: ScaledSize) {
  return scaledSize.width;
}

export function heightGetter(scaledSize: ScaledSize) {
  return scaledSize.height;
}
