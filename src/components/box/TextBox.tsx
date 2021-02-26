import React, { ReactNode } from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';

export interface TextBoxStyleProps {
  boxStyle: ViewStyle;
  textStyle: TextStyle;
}

interface TextBoxProps extends TextBoxStyleProps {
  children: ReactNode;
}

const TextBox: React.FC<TextBoxProps> = ({
  boxStyle,
  textStyle,
  children
}: TextBoxProps) => {
  return (
    <View style={boxStyle}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

export default TextBox;
