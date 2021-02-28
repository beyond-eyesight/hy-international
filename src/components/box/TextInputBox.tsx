import React from 'react';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { blue, white } from 'src/draw/color';

const TextInputBox: React.FC = () => {
  const [text, setText] = React.useState('');
  return (
    <View
      style={{
        backgroundColor: white
      }}
    >
      <TextInput
        label="email"
        value={text}
        onChangeText={(text) => setText(text)}
        selectionColor={blue.get('600')}
        underlineColor={blue.get('600')}
      />
    </View>
  );
};

export default TextInputBox;