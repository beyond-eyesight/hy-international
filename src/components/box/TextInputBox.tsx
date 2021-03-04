import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';

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
        underlineColor="transparent"
        style={contentStyle}
        onFocus={() => {}}
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
