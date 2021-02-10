import runningDeviceModel, {
  DeviceModel
} from 'src/layout/device/model/deviceModel';
import Pixel from 'src/layout/size/pixel';
import { baseDeviceModel } from 'src/layout/device/model/iphone11';
import { Dimensions, ScaledSize } from 'react-native';

export type StandardLengthCalculator = () => Pixel;
