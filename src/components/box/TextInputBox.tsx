import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';

export interface TextInputBoxStyle {
  boxStyle: ViewStyle;
  contentStyle: ViewStyle;
}

const TextInputBox: React.FC<TextInputBoxStyle> = ({
  boxStyle,
  contentStyle
}: TextInputBoxStyle) => {
  const [text, setText] = React.useState('');
  return (
    <View style={boxStyle}>
      <TextInput
        mode="flat"
        label="email"
        value={text}
        onChangeText={(text) => setText(text)}
        selectionColor="#EEEEEE"
        underlineColor="#00000000"
        style={contentStyle}
      />
    </View>
  );
};

export default TextInputBox;
