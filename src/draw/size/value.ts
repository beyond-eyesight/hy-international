import Pixel from './pixel';
import runningDeviceModel from '../device/model/deviceModel';
import Percentage from './percentage';

const ZERO: Pixel = new Pixel(0);

const TOPSECTION_HEIGHT: Pixel = runningDeviceModel.getTopSectionHeightBy(
  new Percentage(6)
);

const HEADER_HEIGHT = TOPSECTION_HEIGHT.plus(
  runningDeviceModel.getTopSectionPaddingTop()
);

export { ZERO, TOPSECTION_HEIGHT, HEADER_HEIGHT };
