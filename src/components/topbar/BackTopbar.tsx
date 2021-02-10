import React from 'react';
import styled from 'styled-components/native';
import IconButton from 'src/components/button/IconButton';
import Topbar from 'src/components/topbar/Topbar';
import icons from 'assets/icons/index';
import { pop, push } from 'src/utils/navigator';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Percentage from 'src/layout/size/percentage';
import { LengthUnit } from 'src/layout/size/lengthUnit';
import translateFromPercentageToPixel from 'src/layout/translator/percentageToPixelTranslator';
import Pixel from 'src/layout/size/pixel';
import runningDeviceModel from 'src/layout/device/model/deviceModel';

export type Props = {
  componentId: string;
  title?: string;
};

const BUTTON_LENGTH = new Percentage(0.085);
const BACK_BUTTON_WIDTH = new Percentage(0.02);
const BACK_BUTTON_HEIGHT = new Percentage(0.018);

const InfoButton = styled(IconButton)<{ length: string }>`
  width: ${({ length }) => length};
  height: ${({ length }) => length};
`;

const BackButton = styled(IconButton)<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  componentId,
  title
}: Props) => {
  const length: LengthUnit = translateFromPercentageToPixel(
    BACK_BUTTON_WIDTH,
    new Pixel(runningDeviceModel._width)
  );

  const backButtonHeight: LengthUnit = translateFromPercentageToPixel(
    BACK_BUTTON_HEIGHT,
    new Pixel(runningDeviceModel._width)
  );
  return (
    <Topbar
      title={title}
      LeftComponent={
        <BackButton
          image={icons.backButton}
          hitSlopSize={16}
          onPress={async () => {
            await pop(componentId);
          }}
          width={length.toString()}
          height={backButtonHeight.toString()}
        />
      }
      RightComponent={
        <InfoButton
          image={icons.information}
          hitSlopSize={23}
          onPress={async () => {
            await push({
              currentComponentId: componentId,
              nextComponentName: SCREEN_IDS.ZoneScreen
            });
          }}
          length={length.toString()}
        />
      }
    />
  );
};
export default BackTopbar;
