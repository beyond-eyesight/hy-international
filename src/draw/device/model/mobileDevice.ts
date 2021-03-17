import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { KeyboardEvent } from 'react-native';
import Percentage from '../../size/percentage';

type CenterSectionState = 'constructed' | 'keyboardDidShow' | 'keyboardDidHide';

// todo: getStatusBarHeight 지우기
// todo: abstract, getWidthOf랑 getHeightOf
export interface MobileDevice {
  getStatusBarOnScreenHeight(): Pixel;
  getCenterSectionPaddingBottom(centerSectionState: CenterSectionState): Pixel;
  getCenterSectionHeight(event?: KeyboardEvent): Pixel;
  getBackActionIcon(): IconSource;
  getHeightOf(percentage: Percentage): Pixel;
  getWidthOf(percentage: Percentage): Pixel;
  getBottomSectionHeight(): Pixel;
}
