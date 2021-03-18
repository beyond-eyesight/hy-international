import Pixel from 'src/draw/size/pixel';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { KeyboardEvent, KeyboardEventName } from 'react-native';
import Percentage from '../../size/percentage';

// todo: abstract, getWidthOf랑 getHeightOf
export interface MobileDevice {
  getStatusBarOnScreenHeight(): Pixel;
  getCenterSectionHeightOn(
    eventName: KeyboardEventName,
    event?: KeyboardEvent
  ): Pixel;
  getCenterSectionBottom(event?: KeyboardEvent): Pixel;
  getBackActionIcon(): IconSource;
  getHeightOf(percentage: Percentage): Pixel;
  getWidthOf(percentage: Percentage): Pixel;
  getBottomSectionHeight(eventName: KeyboardEventName): Pixel;
}
