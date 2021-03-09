import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export interface DeviceModel {
  readonly _width: number;
  readonly _height: number;
  getTopStatusBarHeight(): number;
  getBottomNavigationBarHeight(): number;
  getBackActionIcon(): IconSource;
}

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningWindow: ScaledSize = Dimensions.get('window');

function getAndroidBottomNavigationBarHeight() {
  if (Platform.OS === 'android') {
    const statusbarHeight: number | undefined = StatusBar.currentHeight;
    const softMenubarHeight = runningScreen.height - runningWindow.height;
    if (statusbarHeight === undefined) {
      return 0;
    }
    return statusbarHeight + softMenubarHeight;
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

  getBottomNavigationBarHeight(): number {
    return <number>Platform.select({
      android: getAndroidBottomNavigationBarHeight(),
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

export function getRunningModelBottomNavigationBarHeight(): Pixel {
  return new Pixel(runningDeviceModel.getBottomNavigationBarHeight());
}

export function getRunningModelStatusBarHeight(): Pixel {
  return new Pixel(runningDeviceModel.getTopStatusBarHeight());
}

export function getRunningModelHeight(): Pixel {
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
