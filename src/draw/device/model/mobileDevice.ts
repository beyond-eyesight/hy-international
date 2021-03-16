import { Dimensions, Platform, ScaledSize, StatusBar } from 'react-native';
import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import Percentage from '../../size/percentage';

type CenterSectionState = 'constructed' | 'keyboardDidShow' | 'keyboardDidHide';

// todo: getStatusBarHeight 지우기
export interface MobileDevice {
  // getTopbarPaddingTop(): Pixel;
  // getTopSectionHeightBy(percentage: Percentage): Pixel;
  getCenterSectionPaddingBottom(centerSectionState: CenterSectionState): Pixel;
  getCenterSectionHeight(centerSectionState: CenterSectionState): Pixel;
  getBackActionIcon(): IconSource;
  getHeightOf(percentage: Percentage): Pixel;
  getWidthOf(percentage: Percentage): Pixel;
  getBottomSectionHeight(): Pixel;
}

function getAndroidCenterSectionPaddingBottom(
  centerSectionState: CenterSectionState
) {
  if (androidHasBottomNavigationBar()) {
    return new Pixel(72);
  }

  return new Pixel(24);
}

function getIosCenterSectionPaddingBottom(
  centerSectionState: CenterSectionState
) {
  if (centerSectionState === 'constructed') {
    return new Pixel(0);
  }

  return new Pixel(0);
}

function getAndroidCenterSectionHeight(): Pixel {
  return new Pixel(0);
}

function getIosCenterSectionHeight(
  centerSectionState: CenterSectionState
): Pixel {
  return new Pixel(0);
}

const runningDeviceModel: MobileDevice = {
  getBottomSectionHeight(): Pixel {
    return new Pixel(0);
  },
  getTopbarPaddingTop(): Pixel {
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

  getCenterSectionHeight(centerSectionState: CenterSectionState): Pixel {
    return Platform.select({
      android: getAndroidCenterSectionHeight(),
      ios: getIosCenterSectionHeight(centerSectionState)
    }) as Pixel;
  },

  getCenterSectionPaddingBottom(centerSectionState: CenterSectionState): Pixel {
    return Platform.select({
      android: getAndroidCenterSectionPaddingBottom(centerSectionState),
      ios: getIosCenterSectionPaddingBottom(centerSectionState)
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
