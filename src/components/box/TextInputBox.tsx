import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, ViewStyle, TextInput as NativeTextInput } from 'react-native';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { colors } from 'react-native-svg/lib/typescript/lib/extract/extractColor';

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
        selectionColor="red"
        underlineColor="transparent"
        style={contentStyle}
        onFocus={() => {}}
        theme={{ colors: { text: 'green', primary: 'yellow' } }}
      />
    </View>
  );
};

// onKeyPress={() => {}}
// onTextInput={() => {}}
// onFocus={() => {}}
// onBlur={() => {}}
// onChange={() => {}}
// onEndEditing={() => {}}
// onLayout={() => {}}
// onSelectionChange={() => {}}
// onSubmitEditing={() => {}}
// onScroll={() => {}}

export default TextInputBox;
