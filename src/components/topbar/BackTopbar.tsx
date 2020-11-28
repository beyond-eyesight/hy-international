import React from 'react';
import styled from 'styled-components/native';
import Topbar from './Topbar';
import IconButton from '../button/IconButton';
import icons from '../../../assets/icons';
import { SCREEN_IDS } from '../../screens/constant';
import { pop, push } from '../../utils/navigator';

export type Props = {
  componentId: string;
  title?: string;
};

const InfoButton = styled(IconButton)`
  width: 35px;
  height: 35px;
`;

const BackButton = styled(IconButton)`
  width: 8px;
  height: 16px;
`;

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  componentId,
  title
}: Props) => {
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
        />
      }
    />
  );
};
export default BackTopbar;
