import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import { Keyboard, KeyboardAvoidingView, Platform, View } from 'react-native';
import {
  getRunningModelBottomNavigationBarHeight,
  getRunningModelBottomOnKeyboardDidHide,
  getRunningModelBottomOnKeyboardDidShow
} from '../../draw/device/model/deviceModel';
import Pixel from '../../draw/size/pixel';

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [bottom, setBottom] = useState<Pixel>(
    getRunningModelBottomNavigationBarHeight()
  );
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setBottom(getRunningModelBottomOnKeyboardDidShow());
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setBottom(getRunningModelBottomOnKeyboardDidHide());
    });
  }, [bottom]);

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
              bottom: bottom.value
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
