import Percentage from 'src/layout/size/percentage';
import Pixel from 'src/layout/size/pixel';
import Ratio from 'src/layout/device/standardLength/ratio';

export default function translateFromPercentageToPixel(
  percentage: Percentage,
  standardLength: Pixel
): Pixel {
  const ratio: Ratio = Ratio.from(percentage);
  return standardLength.multiply(ratio);
}
