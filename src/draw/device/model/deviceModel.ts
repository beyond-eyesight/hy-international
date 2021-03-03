import { Dimensions, Platform, ScaledSize } from 'react-native';
import Pixel from 'src/draw/size/pixel';

export interface DeviceModel {
  readonly _width: number;
  readonly _height: number;
  getStatusBarHeight(): number;
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
  }
};

export function getRunningModelStatusBarHeight() {
  const statusBarHeight = runningDeviceModel.getStatusBarHeight();
  return new Pixel(statusBarHeight);
}

export function getRunningModelHeight() {
  return new Pixel(runningDeviceModel._height);
}

export function getRunningModelWidth() {
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
