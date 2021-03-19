import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { KeyboardEvent, StatusBar } from 'react-native';
import { MobileDevice } from 'draw/device/model/mobileDevice';
import Percentage from 'draw/size/percentage';
import Pixel from 'draw/size/pixel';
import { ZERO } from 'draw/value';

class Android implements MobileDevice {
  // todo: refac 중복 제거
  private static readonly TOPBAR_HEIGHT_RATE = new Percentage(6);

  private static readonly NAVIGATION_BAR_HEIGHT: Pixel = new Pixel(48);

  private readonly _screenWidth: Pixel;

  private readonly _screenHeight: Pixel;

  private readonly _navigationBarHeightOnScreen: Pixel;

  constructor(screenWidth: Pixel, screenHeight: Pixel, windowHeight: Pixel) {
    this._screenWidth = screenWidth;
    this._screenHeight = screenHeight;
    this._navigationBarHeightOnScreen = screenHeight.minus(windowHeight);
  }

  private static readonly BACK_ACTION_ICON: IconSource = 'arrow-left';

  // eslint-disable-next-line class-methods-use-this
  get backActionIcon(): IconSource {
    return Android.BACK_ACTION_ICON;
  }

  private static getStatusBarHeight(): Pixel {
    const statusbarHeight: number | undefined = StatusBar.currentHeight;
    if (statusbarHeight === undefined) {
      throw new Error(
        '안드로이드는 반드시 StatusBarHeight를 가집니다. 현재 StatusBarHeight가 undefined 입니다.'
      );
    }
    return new Pixel(statusbarHeight);
  }

  // todo: 현재 이벤트가 있기만 해도 키보드 헤잇 주고있음.
  private static getKeyboardHeightOn(event?: KeyboardEvent): Pixel {
    if (event === undefined) {
      return new Pixel(ZERO);
    }

    return new Pixel(event.endCoordinates.height);
  }

  getWidthOf(percentage: Percentage): Pixel {
    return this._screenWidth.multiply(percentage);
  }

  getHeightOf(percentage: Percentage): Pixel {
    return this._screenHeight.multiply(percentage);
  }

  getCenterSectionHeightOn(event?: KeyboardEvent): Pixel {
    return this._screenHeight
      .minus(this.getHeaderHeight())
      .minus(this.getBottomSectionHeight())
      .minus(Android.getKeyboardHeightOn(event));
  }

  private getBottomSectionHeight(): Pixel {
    const statusBarHeight: Pixel = Android.getStatusBarHeight();
    if (this.hasBottomNavigationBarOnScreen()) {
      return statusBarHeight.plus(this._navigationBarHeightOnScreen);
    }

    return statusBarHeight;
  }

  private getHeaderHeight(): Pixel {
    const topbarHeight: Pixel = this._screenHeight.multiply(
      Android.TOPBAR_HEIGHT_RATE
    );

    if (this.hasBottomNavigationBarOnScreen()) {
      return topbarHeight;
    }

    return topbarHeight.plus(this.getStatusBarOnScreenHeight());
  }

  private hasBottomNavigationBarOnScreen(): Boolean {
    return this._navigationBarHeightOnScreen.isNotZero();
  }

  // eslint-disable-next-line class-methods-use-this
  getStatusBarOnScreenHeight(): Pixel {
    return new Pixel(ZERO);
  }

  getCenterSectionBottomOn(event?: KeyboardEvent): Pixel {
    let centerSectionBottom: Pixel = Android.getStatusBarHeight();

    if (this.hasBottomNavigationBarOnScreen()) {
      centerSectionBottom = centerSectionBottom.plus(
        Android.NAVIGATION_BAR_HEIGHT
      );
    }

    return centerSectionBottom.plus(Android.getKeyboardHeightOn(event));
  }
}

export default Android;
