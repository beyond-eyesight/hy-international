import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { MobileDevice } from 'draw/device/model/mobileDevice';
import Pixel from 'draw/size/pixel';
import Percentage from 'draw/size/percentage';
import { ZERO } from 'draw/value';

class Iphone implements MobileDevice {
  private static readonly BOTTOM_SECTION_HEIGHT = new Pixel(34.5);

  private static readonly TOPBAR_HEIGHT_RATE = new Percentage(6);

  private static readonly X_VERSION_STATUS_BAR_HEIGHT = new Pixel(44);

  private static readonly REGULAR_VERSION_STATUS_BAR_HEIGHT: Pixel = new Pixel(
    20
  );

  private static readonly BACK_ACTION_ICON: IconSource = 'chevron-left';

  private readonly _width: Pixel;

  private readonly _height: Pixel;

  // eslint-disable-next-line class-methods-use-this
  get backActionIcon(): IconSource {
    return Iphone.BACK_ACTION_ICON;
  }

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

  getCenterSectionHeightOn(): Pixel {
    return this._height
      .minus(this.getHeaderHeight())
      .minus(Iphone.BOTTOM_SECTION_HEIGHT);
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
  getCenterSectionBottomOn(): Pixel {
    return new Pixel(ZERO);
  }
}

export default Iphone;
