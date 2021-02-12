import { Dimensions, ScaledSize } from 'react-native';
import Pixel from 'src/layout/size/pixel';

export interface DeviceModel {
  readonly _width: number;
  readonly _height: number;
}

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningDeviceModel: DeviceModel = {
  _height: runningScreen.height,
  _width: runningScreen.width
};

export function getRunningModelHeight() {
  return new Pixel(runningDeviceModel._height);
}

export function getRunningModelWidth() {
  return new Pixel(runningDeviceModel._width);
}
