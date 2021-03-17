import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import Pixel from '../../size/pixel';
import Percentage from '../../size/percentage';
import { MobileDevice } from './mobileDevice';

class Iphone implements MobileDevice {
  private static readonly BACK_ACTION_ICON_NAME = 'chevron-left';

  private static readonly BOTTOM_SECTION_HEIGHT = new Pixel(34.5);

  private static readonly TOPBAR_HEIGHT_RATE = new Percentage(6);

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

  // todo: android랑 같이 켰을 때 이상한지 보기

  private versionIsX(): Boolean {
    return this._height.equals(812) || this._height.equals(896);
  }

  // eslint-disable-next-line class-methods-use-this
  getBackActionIcon(): IconSource {
    return Iphone.BACK_ACTION_ICON_NAME;
  }

  // todo: 이거 없어도 됨.
  // eslint-disable-next-line class-methods-use-this
  getBottomSectionHeight(): Pixel {
    return new Pixel(34.5);
  }

  getCenterSectionHeight(): Pixel {
    return this._height
      .minus(this.getHeaderHeight())
      .minus(Iphone.BOTTOM_SECTION_HEIGHT);
  }

  // todo: 이건 아마추상화에서 빼도 될거같은..? 센터섹션헤잇만 있음 될거같은데.
  // eslint-disable-next-line class-methods-use-this
  getCenterSectionPaddingBottom(
    centerSectionState: 'constructed' | 'keyboardDidShow' | 'keyboardDidHide'
  ): Pixel {
    return new Pixel(0);
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
      return new Pixel(44);
    }
    return new Pixel(0);
  }
}

export default Iphone;
