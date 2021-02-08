import React, { useContext } from 'react';
import { ImageProps, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Bold18 } from 'src/components/text/Typographies';
import colors from 'src/utils/color';
import ApplicationContext from 'src/context/applicationContext';
import { getHeightOf } from 'src/layout/standardDeviceModel';
import PercentageSize from 'src/layout/size/percentageSize';
import PixelSize from 'src/layout/size/pixelSize';

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

const TOP_BAR_HEIGHT = new PercentageSize(0.06);

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

const Title = styled(Bold18)`
  flex-direction: row;
  color: ${colors.black};
  align-self: center;
`;

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
  const { scaleApi } = useContext(ApplicationContext);
  const hasTitle = Boolean(title);
  const height: PixelSize = scaleApi.scale(TOP_BAR_HEIGHT, getHeightOf);
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
