import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { KeyboardEvent } from 'react-native';
import Percentage from '../../size/percentage';

// todo: abstract, getWidthOf랑 getHeightOf
export interface MobileDevice {
  getStatusBarOnScreenHeight(): Pixel;
  getCenterSectionHeightOn(event?: KeyboardEvent): Pixel;
  getCenterSectionBottom(event?: KeyboardEvent): Pixel;
  getBackActionIcon(): IconSource;
  getHeightOf(percentage: Percentage): Pixel;
  getWidthOf(percentage: Percentage): Pixel;
}
