import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

export interface DeviceModel {
  readonly _width: Pixel;
  readonly _height: Pixel;
  hasBottomNavigationBar(): boolean;
  getStatusBarHeight(): Pixel;
  getBottomNavigationBarHeight(): Pixel;
  getBackActionIcon(): IconSource;
  getBottomOnKeyboardDidShow(): Pixel;
}

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningWindow: ScaledSize = Dimensions.get('window');

function getAndroidBottomNavigationBarHeight(): Pixel {
  const statusbarHeight: Pixel = getAndroidStatusBarHeight();
  if (statusbarHeight.isZero()) {
    return statusbarHeight;
  }
  return statusbarHeight.plus(ANDROID_SOFT_MENU_BAR_HEIGHT);
}

const runningDeviceModel: DeviceModel = {
  _height: new Pixel(runningScreen.height),
  _width: new Pixel(runningScreen.width),

  hasBottomNavigationBar(): boolean {
    return runningScreen.height - runningWindow.height !== 0;
  },

  getStatusBarHeight(): Pixel {
    return Platform.select({
      android: new Pixel(0),
      ios: getIosStatusBarHeight()
    }) as Pixel;
  },

  getBottomNavigationBarHeight(): Pixel {
    return Platform.select({
      android: getAndroidBottomNavigationBarHeight(),
      ios: new Pixel(0)
    }) as Pixel;
  },

  getBottomOnKeyboardDidShow(): Pixel {
    return Platform.select({
      android: getAndroidBottomOnKeyboardDidShow(),
      ios: new Pixel(0)
    }) as Pixel;
  },

  getBackActionIcon(): IconSource {
    return <IconSource>Platform.select({
      android: 'arrow-left',
      ios: 'chevron-left'
    });
  }
};

function getAndroidBottomOnKeyboardDidShow() {
  if (runningModelHasBottomNavigationBar()) {
    return new Pixel(48 + 24);
  }

  return new Pixel(48);
}

export function runningModelHasBottomNavigationBar(): boolean {
  return runningDeviceModel.hasBottomNavigationBar();
}

export function getRunningModelBottomOnKeyboardDidShow(): Pixel {
  return runningDeviceModel.getBottomOnKeyboardDidShow();
}

export function getRunningModelBackActionIcon(): IconSource {
  return runningDeviceModel.getBackActionIcon();
}

export function getRunningModelSoftMenuBarHeight(): Pixel {
  return new Pixel(48);
}

export function getRunningModelBottomNavigationBarHeight(): Pixel {
  return runningDeviceModel.getBottomNavigationBarHeight();
}

export function getRunningModelStatusBarHeight(): Pixel {
  return runningDeviceModel.getStatusBarHeight();
}

export function getRunningModelHeight(): Pixel {
  return runningDeviceModel._height;
}

export function getRunningModelWidth(): Pixel {
  return runningDeviceModel._width;
}

const ANDROID_SOFT_MENU_BAR_HEIGHT: Pixel = new Pixel(
  runningScreen.height - runningWindow.height
);

function getAndroidStatusBarHeight(): Pixel {
  const androidStatusBarHeight: number | undefined = StatusBar.currentHeight;
  if (androidStatusBarHeight !== undefined) {
    return new Pixel(androidStatusBarHeight);
  }

  return new Pixel(0);
}

function getIosStatusBarHeight(): Pixel {
  if (isIphoneX) {
    return new Pixel(44);
  }
  if (isIOS && !isIphoneX) {
    return new Pixel(20);
  }

  return new Pixel(0);
}

export const isIphoneX =
  Platform.OS === 'ios' &&
  (runningScreen.height === 812 ||
    runningScreen.width === 812 ||
    runningScreen.height === 896 ||
    runningScreen.width === 896);

export const isIOS = Platform.OS === 'ios';
