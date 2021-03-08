import { Dimensions, PixelRatio, Platform, ScaledSize } from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export interface DeviceModel {
  readonly _width: number;
  readonly _height: number;
  getStatusBarHeight(): number;
  getBackActionIcon(): IconSource;
}

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningDeviceModel: DeviceModel = {
  _height: runningScreen.height,
  _width: runningScreen.width,

  getStatusBarHeight(): number {
    return <number>Platform.select({
      android: 0,
      ios: getIosStatusBarHeight()
    });
  },

  getBackActionIcon(): IconSource {
    return <IconSource>Platform.select({
      android: 'arrow-left',
      ios: 'chevron-left'
    });
  }
};

export function getRunningModelBackActionIcon(): IconSource {
  return runningDeviceModel.getBackActionIcon();
}

export function getRunningModelStatusBarHeight(): Pixel {
  const statusBarHeight = runningDeviceModel.getStatusBarHeight();
  return new Pixel(statusBarHeight);
}

export function getRunningModelHeight(): Pixel {
  console.log('height');
  console.log(runningDeviceModel._height);
  return new Pixel(runningDeviceModel._height);
}

export function getRunningModelWidth(): Pixel {
  return new Pixel(runningDeviceModel._width);
}

const getIosStatusBarHeight = () => {
  if (isIphoneX) {
    return 44;
  }
  if (isIOS && !isIphoneX) {
    return 20;
  }

  return 0;
};

export const isIphoneX =
  Platform.OS === 'ios' &&
  (runningScreen.height === 812 ||
    runningScreen.width === 812 ||
    runningScreen.height === 896 ||
    runningScreen.width === 896);

export const isIOS = Platform.OS === 'ios';
