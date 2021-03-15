import { Platform } from 'react-native';
import Pixel from './pixel';
import runningDeviceModel, {
  androidHasBottomNavigationBar
} from '../device/model/deviceModel';
import Percentage from './percentage';

const ZERO: Pixel = new Pixel(0);

const TOPSECTION_HEIGHT: Pixel = runningDeviceModel.getTopSectionHeightBy(
  new Percentage(6)
);

function getIosHeaderHeight(): Pixel {
  return TOPSECTION_HEIGHT.plus(runningDeviceModel.getTopSectionPaddingTop());
}

function getAndroidHeaderHeight(): Pixel {
  if (androidHasBottomNavigationBar()) {
    return TOPSECTION_HEIGHT;
  }
  return TOPSECTION_HEIGHT.plus(new Pixel(24));
}

const HEADER_HEIGHT = Platform.select({
  android: getAndroidHeaderHeight(),
  ios: getIosHeaderHeight()
}) as Pixel;

export { ZERO, TOPSECTION_HEIGHT, HEADER_HEIGHT };
