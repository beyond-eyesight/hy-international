import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import colors from 'src/draw/color/color';

const TextInputBox: React.FC = () => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        backgroundColor: colors.white
      }}
    >
      <TextInput
        label="email"
        value={text}
        onChangeText={(text) => setText(text)}
        selectionColor={colors.blue_signiture}
        underlineColor={colors.blue_signiture}
      />
    </View>
  );
};

export default TextInputBox;
