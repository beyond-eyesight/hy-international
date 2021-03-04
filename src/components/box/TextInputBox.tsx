import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, ViewStyle } from 'react-native';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

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

export default TextInputBox;
