import React from 'react';
import {
  ImageProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import Percentage from 'src/draw/size/percentage';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Pixel from 'src/draw/size/pixel';
import { blue, white } from 'src/draw/color';
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

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: '#FFFFFF',
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
    <View>
      <TextBox
        boxStyle={textBoxProps.boxStyle}
        textStyle={textBoxProps.textStyle}
      >
        {title}
      </TextBox>
    </View>
  );
};

export default Topbar;
