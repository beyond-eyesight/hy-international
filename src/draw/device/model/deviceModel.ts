import { Dimensions, PixelRatio, Platform, ScaledSize, StatusBar } from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export interface DeviceModel {
  readonly _width: number;
  readonly _height: number;
  getTopStatusBarHeight(): number;
  getBottomStatusBarHeight(): number;
  getBackActionIcon(): IconSource;
}

const runningScreen: ScaledSize = Dimensions.get('screen');

function getAndroidStatusBarHeight() {
  console.log('kk');
  console.log(PixelRatio.get());
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight;
  }

  return 0;
}

const runningDeviceModel: DeviceModel = {
  _height: runningScreen.height,
  _width: runningScreen.width,

  getTopStatusBarHeight(): number {
    return <number>Platform.select({
      android: 0,
      ios: getIosStatusBarHeight()
    });
  },

  getBottomStatusBarHeight(): number {
    return <number>Platform.select({
      android: getAndroidStatusBarHeight(),
      ios: 0
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
  return new Pixel(runningDeviceModel.getTopStatusBarHeight());
}

export function getRunningModelHeight(): Pixel {
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
