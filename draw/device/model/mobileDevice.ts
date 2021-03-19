import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { KeyboardEvent } from 'react-native';
import Pixel from 'draw/size/pixel';
import Percentage from 'draw/size/percentage';

// todo: abstract, getWidthOf랑 getHeightOf
export interface MobileDevice {
  readonly backActionIcon: IconSource;
  getStatusBarOnScreenHeight(): Pixel;
  getCenterSectionHeightOn(event?: KeyboardEvent): Pixel;
  getCenterSectionBottomOn(event?: KeyboardEvent): Pixel;
  getHeightOf(percentage: Percentage): Pixel;
  getWidthOf(percentage: Percentage): Pixel;
}
