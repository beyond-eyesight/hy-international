import React from 'react';
import Pixel from 'src/draw/size/pixel';
import { runningDeviceModel } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { grey, white } from 'src/draw/color';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { StyleSheet } from 'react-native';

interface Props {
  width: string;
  height: string;
  content: string;
  ellipticalColor: string | undefined;
  textColor: string | undefined;
  borderRadius: string;
  onPress?: () => void;
}

const deviceModelHeight: Pixel = runningDeviceModel._height;

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

const textSize: Pixel = deviceModelHeight.multiply(new Percentage(3));

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
