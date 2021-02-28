import React from 'react';
import { ImageProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import Percentage from 'src/draw/size/percentage';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Pixel from 'src/draw/size/pixel';
import { blue, grey, white } from 'src/draw/color';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';

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
  background-color: ${grey.get('99')};
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding-horizontal: 20px;
`;

// 둘다 사이
// getPixel, getPercent

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: textSize.value,
    lineHeight: textSize.value,
    color: white
  }
});
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
  const height: Pixel = getRunningModelHeight().multiply(new Percentage(6));

  return (
    <Container style={containerStyle} height={height.toString()}>
      <Content justifyContent={justifyContent} height={height.toString()}>
        {LeftComponent}
        {hasTitle && typeof title === 'string' ? (
          <TextBox
            boxStyle={textBoxProps.boxStyle}
            textStyle={textBoxProps.textStyle}
          >
            {title}
          </TextBox>
        ) : null}

        {RightComponent}
      </Content>
    </Container>
  );
};

export default Topbar;
