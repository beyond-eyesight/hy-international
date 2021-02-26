import React from 'react';
import { TextInput } from 'react-native-paper';
import colors from 'src/utils/color';
import { View } from 'react-native';

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
