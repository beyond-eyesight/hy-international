import React from 'react';
import { ImageProps, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import colors from 'src/utils/color';
import Percentage from 'src/layout/size/percentage';
import RNText from 'src/components/text/RNText';
import { getRunningModelHeight } from 'src/layout/device/model/deviceModel';
import Pixel from 'src/layout/size/pixel';

export type Props = {
  style?: StyleProp<ViewStyle>;
  title?: React.ReactNode;
  onBackPress?: () => void;
  iconSource?: ImageProps['source'];
  iconStyle?: ImageProps['style'];
  LeftComponent?: JSX.Element;
  RightComponent?: JSX.Element;
  justifyContent?: string;
};

// todo: refac bg-bottom-color
const Container = styled.View<{ height: string }>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height};
  border-bottom-width: 1px;
  border-bottom-color: #d4d7dd;
`;

const Content = styled.View<{ justifyContent: string; height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  background-color: ${colors.milkWhite};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding-horizontal: 20px;
`;

const Title = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.black
})`
  font-size: 25px;
`;

// 둘다 사이
// getPixel, getPercent
const Topbar: React.FC<Props> = ({
  style: containerStyle,
  title,
  iconSource,
  iconStyle,
  LeftComponent,
  RightComponent,
  onBackPress,
  justifyContent = 'space-between'
}: Props) => {
  const hasTitle = Boolean(title);
  // todo: 여기 좀 이상
  const height: Pixel = getRunningModelHeight().multiply(new Percentage(0.06));
  return (
    <Container style={containerStyle} height={height.toString()}>
      <Content justifyContent={justifyContent} height={height.toString()}>
        {LeftComponent}
        {hasTitle && typeof title === 'string' ? (
          <Title numberOfLines={1}>{title}</Title>
        ) : null}

        {RightComponent}
      </Content>
    </Container>
  );
};

export default Topbar;
