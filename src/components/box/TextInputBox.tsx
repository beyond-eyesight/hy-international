import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { Theme } from 'react-native-paper/lib/typescript/types';

export interface TextInputBoxStyle {
  boxStyle: ViewStyle;
  contentStyle: ViewStyle;
}

interface TextInputBoxProps extends Omit<TextInputProps, 'theme'> {
  textInputBoxStyle: TextInputBoxStyle;
}

const TextInputBox: React.FC<TextInputBoxProps> = ({
  textInputBoxStyle,
  label
}: TextInputBoxProps) => {
  const [text, setText] = React.useState('');
  return (
    <View style={textInputBoxStyle.boxStyle}>
      <TextInput
        label={label}
        value={text}
        onChangeText={(text) => setText(text)}
        style={textInputBoxStyle.contentStyle}
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
