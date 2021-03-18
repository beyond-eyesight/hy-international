import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { KeyboardEventName } from 'react-native';
import Pixel from '../../size/pixel';
import Percentage from '../../size/percentage';
import { MobileDevice } from './mobileDevice';
import { ZERO } from '../../value';

class Iphone implements MobileDevice {
  private static readonly BACK_ACTION_ICON_NAME = 'chevron-left';

  private static readonly BOTTOM_SECTION_HEIGHT = new Pixel(34.5);

  private static readonly TOPBAR_HEIGHT_RATE = new Percentage(6);

  private static readonly X_VERSION_STATUS_BAR_HEIGHT = new Pixel(44);

  private static readonly REGULAR_VERSION_STATUS_BAR_HEIGHT: Pixel = new Pixel(
    20
  );

  private readonly _width: Pixel;

  private readonly _height: Pixel;

  constructor(width: Pixel, height: Pixel) {
    this._width = width;
    this._height = height;
  }

  getWidthOf(percentage: Percentage): Pixel {
    return this._width.multiply(percentage);
  }

  getHeightOf(percentage: Percentage): Pixel {
    return this._height.multiply(percentage);
  }

  private versionIsX(): Boolean {
    return this._height.equals(812) || this._height.equals(896);
  }

  // eslint-disable-next-line class-methods-use-this
  getBackActionIcon(): IconSource {
    return Iphone.BACK_ACTION_ICON_NAME;
  }

  // todo: 이거 없어도 됨.
  // eslint-disable-next-line class-methods-use-this
  getBottomSectionHeight(eventName: KeyboardEventName): Pixel {
    return Iphone.BOTTOM_SECTION_HEIGHT;
  }

  getCenterSectionHeightOn(eventName: KeyboardEventName): Pixel {
    return this._height
      .minus(this.getHeaderHeight())
      .minus(this.getBottomSectionHeight(eventName));
  }

  getStatusBarOnScreenHeight(): Pixel {
    return this.getStatusBarHeight();
  }

  private getHeaderHeight(): Pixel {
    const statusBarHeight: Pixel = this.getStatusBarHeight();
    return this._height
      .multiply(Iphone.TOPBAR_HEIGHT_RATE)
      .plus(statusBarHeight);
  }

  // todo: refac - static

  private getStatusBarHeight(): Pixel {
    if (this.versionIsX()) {
      return Iphone.X_VERSION_STATUS_BAR_HEIGHT;
    }
    return Iphone.REGULAR_VERSION_STATUS_BAR_HEIGHT;
  }

  // eslint-disable-next-line class-methods-use-this
  getCenterSectionBottom(): Pixel {
    return new Pixel(ZERO);
  }
}

export default Iphone;
