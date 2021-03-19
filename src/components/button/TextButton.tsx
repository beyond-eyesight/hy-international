import React from 'react';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { StyleSheet } from 'react-native';
import Pixel from 'draw/size/pixel';
import { screenHeight } from 'draw/device/model/runningMobileDevice';
import Percentage from 'draw/size/percentage';
import { grey, white } from 'draw/color';

interface Props {
  width: string;
  height: string;
  content: string;
  ellipticalColor: string | undefined;
  textColor: string | undefined;
  borderRadius: string;
  onPress?: () => void;
}

const TextButton: React.FC<Props> = ({
  width,
  height,
  content,
  ellipticalColor,
  textColor,
  borderRadius,
  onPress = () => {},
  ...props
}: Props) => {
  return (
    <TextBox
      boxStyle={textBoxProps.boxStyle}
      textStyle={textBoxProps.textStyle}
    >
      {content}
    </TextBox>
  );
};

const textSize: Pixel = screenHeight.multiply(new Percentage(3));

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: grey.get('600'),
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

export default TextButton;
