import React from 'react';
import { ImageProps, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { Bold18 } from 'src/components/text/Typographies';
import colors from 'src/utils/color';
import { calculateRefinedLength, heightGetter } from 'src/utils/device';

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

const TOP_BAR_HEIGHT = calculateRefinedLength(56, heightGetter);

// todo: refac bg-bottom-color
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${TOP_BAR_HEIGHT}px;
  border-bottom-width: 1px;
  border-bottom-color: #d4d7dd;
`;

const Content = styled.View<{ justifyContent: string }>`
  width: 100%;
  height: ${TOP_BAR_HEIGHT}px;
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

function Topbar({
  style: containerStyle,
  title,
  iconSource,
  iconStyle,
  LeftComponent,
  RightComponent,
  onBackPress,
  justifyContent = 'space-between'
}: Props) {
  const hasTitle = Boolean(title);
  return (
    <Container style={containerStyle}>
      <Content justifyContent={justifyContent}>
        {LeftComponent}
        {hasTitle && typeof title === 'string' ? (
          <Title numberOfLines={1}>{title}</Title>
        ) : null}

        {RightComponent}
      </Content>
    </Container>
  );
}

export default Topbar;
