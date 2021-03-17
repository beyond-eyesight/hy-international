import Pixel from './pixel';
import Percentage from './percentage';
import RunningMobileDevice from '../device/model/runningMobileDevice';

const ZERO: Pixel = new Pixel(0);

const TOPBAR_HEIGHT: Pixel = RunningMobileDevice.getHeightOf(new Percentage(6));

const CENTER_SECTION_HEIGHT: Pixel = RunningMobileDevice.getCenterSectionHeight();

export { ZERO, TOPBAR_HEIGHT, CENTER_SECTION_HEIGHT };
