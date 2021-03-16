import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import Percentage from '../../size/percentage';

// todo: getStatusBarHeight 지우기
interface DeviceModel {
  readonly _width: Pixel;
  readonly _height: Pixel;
  getTopSectionPaddingTop(): Pixel;
  getCenterSectionPaddingBottom(): Pixel;
  getTopSectionHeightBy(percentage: Percentage): Pixel;
  getCenterSectionHeight(): Pixel;
  getBottomNavigationBarHeight(): Pixel;
  getBackActionIcon(): IconSource;
  getBottomOnKeyboardDidShow(): Pixel;
  getBottomOnKeyboardDidHide(): Pixel;
  getHeightOf(percentage: Percentage): Pixel;
  getWidthOf(percentage: Percentage): Pixel;
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

function getAndroidCenterSectionPaddingBottom() {
  if (androidHasBottomNavigationBar()) {
    return new Pixel(72);
  }

  return new Pixel(24);
}

const runningDeviceModel: DeviceModel = {
  getTopSectionPaddingTop(): Pixel {
    return Platform.select({
      android: new Pixel(0),
      ios: getIosStatusBarHeight()
    }) as Pixel;
  },
  getTopSectionHeightBy(percentage: Percentage): Pixel {
    return this._height.multiply(percentage);
  },
  _height: new Pixel(runningScreen.height),
  _width: new Pixel(runningScreen.width),

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

  getBottomOnKeyboardDidHide(): Pixel {
    return Platform.select({
      android: getAndroidBottomOnKeyboardDidHide(),
      ios: new Pixel(0)
    }) as Pixel;
  },

  getBackActionIcon(): IconSource {
    return <IconSource>Platform.select({
      android: 'arrow-left',
      ios: 'chevron-left'
    });
  },

  getHeightOf(percentage: Percentage): Pixel {
    return this._height.multiply(percentage);
  },

  getWidthOf(percentage: Percentage): Pixel {
    return this._width.multiply(percentage);
  },

  getCenterSectionHeight(): Pixel {
    return new Pixel(0);
  },

  getCenterSectionPaddingBottom(): Pixel {
    return Platform.select({
      android: getAndroidCenterSectionPaddingBottom(),
      ios: new Pixel(34.5)
    }) as Pixel;
  }
};

// todo: refac - 결국 앞은 같고 뒤만 다른것.
function getAndroidBottomOnKeyboardDidHide() {
  if (androidHasBottomNavigationBar()) {
    return new Pixel(72);
  }
  return new Pixel(24);
}

function getAndroidBottomOnKeyboardDidShow() {
  if (androidHasBottomNavigationBar()) {
    return new Pixel(48 + 24 - 5);
  }

  return new Pixel(48 + 8);
}

export function androidHasBottomNavigationBar(): boolean {
  return runningScreen.height - runningWindow.height !== 0;
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

const isIphoneX =
  Platform.OS === 'ios' &&
  (runningScreen.height === 812 ||
    runningScreen.width === 812 ||
    runningScreen.height === 896 ||
    runningScreen.width === 896);

const isIOS = Platform.OS === 'ios';

export default runningDeviceModel;
