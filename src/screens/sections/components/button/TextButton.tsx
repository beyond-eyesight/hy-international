import React from 'react';
import { StyleSheet } from 'react-native';
import Pixel from 'graphic/size/pixel';
import { screenHeight } from 'graphic/device/model/runningMobileDevice';
import Percentage from 'graphic/size/percentage';
import { grey, white } from 'graphic/color';
import TextBox, {
  TextBoxStyleProps
} from 'src/screens/sections/components/box/TextBox';

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
