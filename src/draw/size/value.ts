import Pixel from './pixel';
import runningDeviceModel from '../device/model/deviceModel';
import Percentage from './percentage';

const ZERO: Pixel = new Pixel(0);

const HEADER_HEIGHT = runningDeviceModel.getHeaderHeightBy(new Percentage(6));

export { ZERO, HEADER_HEIGHT };
