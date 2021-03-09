import React, { useEffect, useState } from 'react';
import {
  GiftedChat,
  IMessage,
  InputToolbar,
  InputToolbarProps
} from 'react-native-gifted-chat';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import TextInputBox, { TextInputBoxStyle } from '../box/TextInputBox';
import { getRunningModelToolbarHeight } from '../../draw/device/model/deviceModel';

interface ToolbarProps extends InputToolbarProps {}

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      console.log('Keyboard Shown');
    });
  }, []);
  console.log('kk');
  console.log(StatusBar.currentHeight);

  // scrollToBottom
  // todo: 트랜잭션으로 묶든가 해야할거같은디

  const inputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: '100%',
      height: 48,
      backgroundColor: 'green'
    },
    contentStyle: {
      width: '100%',
      height: 48,
      backgroundColor: 'blue'
    }
  });

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages: IMessage[]) => {}}
        forceGetKeyboardHeight
        renderInputToolbar={(props) => (
          <InputToolbar
            containerStyle={{
              backgroundColor: 'red',
              borderWidth: 0,
              bottom: getRunningModelToolbarHeight().value + 48 - 24
            }}
            primaryStyle={{}}
            {...props}
          />
        )}
        user={{
          // todo: remove hard coding
          _id: '1'
        }}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

// renderComposer={(props) => (
//   <TextInputBox
//     textInputBoxStyle={{
//       boxStyle: inputStyles.boxStyle,
//       contentStyle: inputStyles.contentStyle
//     }}
//   />
// )}

export default ChatSection;
