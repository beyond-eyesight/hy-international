import Ratio from 'src/layout/device/standardLength/ratio';
import Pixel from 'src/layout/size/pixel';
import runningDeviceModel from 'src/layout/device/model/deviceModel';
import { baseDeviceModel } from 'src/layout/device/model/iphone11';

function calculateModelWidth(): Pixel {
  const ratio: Ratio = new Ratio(
    runningDeviceModel._width / baseDeviceModel._width
  );
  const baseWidth: Pixel = new Pixel(baseDeviceModel._width);
  return baseWidth.multiply(ratio);
}

function calculateModelHeight(): Pixel {
  const ratio: Ratio = new Ratio(
    runningDeviceModel._height / baseDeviceModel._width
  );
  const baseWidth: Pixel = new Pixel(baseDeviceModel._width);
  return baseWidth.multiply(ratio);
}
