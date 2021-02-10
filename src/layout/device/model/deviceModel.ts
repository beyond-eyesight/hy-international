import { Dimensions, ScaledSize } from 'react-native';

export interface DeviceModel {
  readonly _width: number;
  readonly _height: number;
}

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningDeviceModel: DeviceModel = {
  _height: runningScreen.height,
  _width: runningScreen.width
};

export default runningDeviceModel;
