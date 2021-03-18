import Pixel from './size/pixel';
import RunningMobileDevice from './device/model/runningMobileDevice';
import Percentage from './size/percentage';

const ZERO: number = 0;

const TOPBAR_HEIGHT: Pixel = RunningMobileDevice.getHeightOf(new Percentage(6));

export { ZERO, TOPBAR_HEIGHT };
