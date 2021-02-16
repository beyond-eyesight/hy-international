import React from 'react';
import styled from 'styled-components/native';
import IconButton from 'src/components/button/IconButton';
import Topbar from 'src/components/topbar/Topbar';
import icons from 'assets/icons/index';
import { pop, push } from 'src/utils/navigator';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Percentage from 'src/draw/size/percentage';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelWidth } from 'src/draw/device/model/deviceModel';

export type Props = {
  componentId: string;
  title?: string;
};

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
  const length: Pixel = getRunningModelWidth().multiply(new Percentage(8));

  const backButtonHeight: Pixel = getRunningModelWidth().multiply(
    new Percentage(4.8)
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
