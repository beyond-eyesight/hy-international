import { DeviceModel } from 'src/draw/device/model/deviceModel';

export default class IPhone11 implements DeviceModel {
  readonly _width = 414;

  readonly _height = 896;
}

export const baseDeviceModel: DeviceModel = new IPhone11();
