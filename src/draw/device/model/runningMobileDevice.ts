import { Dimensions, Platform, ScaledSize } from 'react-native';
import Pixel from '../../size/pixel';
import { MobileDevice } from './mobileDevice';
import Iphone from './iphone';
import Android from './android';

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningWindow: ScaledSize = Dimensions.get('window');

interface MobilePlatform {
  OS: 'android' | 'ios';
}

function getCurrentMobilePlatform(): MobilePlatform {
  if (Platform.OS === 'android' || Platform.OS === 'ios') {
    return Platform;
  }

  throw new Error('모바일 플랫폼은 android와 ios 뿐입니다.');
}

const currentMobilePlatform: MobilePlatform = getCurrentMobilePlatform();

function createRunningMobileDevice(platform: MobilePlatform): MobileDevice {
  if (platform.OS === 'ios') {
    return new Iphone(
      new Pixel(runningScreen.width),
      new Pixel(runningScreen.height)
    );
  }

  return new Android(
    new Pixel(runningScreen.width),
    new Pixel(runningScreen.height),
    new Pixel(runningWindow.height)
  );
}

const RunningMobileDevice: MobileDevice = createRunningMobileDevice(
  currentMobilePlatform
);

export default RunningMobileDevice;
