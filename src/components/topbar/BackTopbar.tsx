import React, { useContext } from 'react';
import styled from 'styled-components/native';
import IconButton from 'src/components/button/IconButton';
import Topbar from 'src/components/topbar/Topbar';
import icons from 'assets/icons/index';
import { pop, push } from 'src/utils/navigator';
import { SCREEN_IDS } from 'src/components/screens/constant';
import ApplicationContext from 'src/context/applicationContext';
import { getHeightOf, getWidthOf } from 'src/layout/standardDeviceModel';
import PercentageSize from 'src/layout/size/percentageSize';
import PixelSize from 'src/layout/size/pixelSize';

export type Props = {
  componentId: string;
  title?: string;
};

const BUTTON_LENGTH = new PercentageSize(0.085);
const BACK_BUTTON_WIDTH = new PercentageSize(0.02);
const BACK_BUTTON_HEIGHT = new PercentageSize(0.018);

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
  const { scaleApi } = useContext(ApplicationContext);
  const length: PixelSize = scaleApi.scale(BUTTON_LENGTH, getWidthOf);
  const backButtonWidth: PixelSize = scaleApi.scale(
    BACK_BUTTON_WIDTH,
    getWidthOf
  );

  const backButtonHeight: PixelSize = scaleApi.scale(
    BACK_BUTTON_HEIGHT,
    getHeightOf
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
          width={backButtonWidth.toString()}
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
