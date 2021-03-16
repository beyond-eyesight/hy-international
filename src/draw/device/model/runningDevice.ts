import { Dimensions, ScaledSize } from 'react-native';
import Pixel from '../../size/pixel';

const runningScreen: ScaledSize = Dimensions.get('screen');
const runningWindow: ScaledSize = Dimensions.get('window');

const NAVIGATION_BAR_HEIGHT: Pixel = new Pixel(
  runningScreen.height - runningWindow.height
);
