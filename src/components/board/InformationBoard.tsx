import React, { ReactNode } from 'react';
import { PixelRatio, StyleSheet, View } from 'react-native';
import TextBox from 'src/components/box/TextBox';
import { TextInputBoxStyle } from 'src/components/box/TextInputBox';
import {
  getRunningModelHeight,
  getRunningModelWidth
} from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';

interface Props {
  title: string;
  children: ReactNode;
  titleStyles: TextInputBoxStyle;
  bodyStyles: TextInputBoxStyle;
}

const InformationBoard: React.FC<Props> = ({
  title,
  children,
  titleStyles,
  bodyStyles
}: Props) => {
  return (
    <View>
      <TextBox
        boxStyle={titleStyles.boxStyle}
        textStyle={titleStyles.contentStyle}
      >
        {title}
      </TextBox>
      <TextBox
        boxStyle={bodyStyles.boxStyle}
        textStyle={bodyStyles.contentStyle}
      >
        You can enjoy more your exchange-campus life with this app
      </TextBox>
    </View>
  );
};

// <TextBox
//   boxStyle={titleStyles.boxStyle}
//   textStyle={titleStyles.contentStyle}
// >
//   {children}
// </TextBox>
export default InformationBoard;
