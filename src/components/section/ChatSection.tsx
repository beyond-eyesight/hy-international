import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import Pixel from '../../draw/size/pixel';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import TextInputBox, { TextInputBoxStyle } from '../box/TextInputBox';

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [bottom, setBottom] = useState<Pixel>(
    runningDeviceModel.getBottomNavigationBarHeight()
  );

  const bottomOnKeyboardDidShow = runningDeviceModel.getBottomOnKeyboardDidShow();
  const bottomOnKeyboardDidHide = runningDeviceModel.getBottomOnKeyboardDidHide();
  const inputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: '100%',
      height: 50,
      backgroundColor: 'red'
    },
    contentStyle: {
      width: '100%',
      backgroundColor: 'red',
      height: 50
    }
  });
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setBottom(bottomOnKeyboardDidShow);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setBottom(bottomOnKeyboardDidHide);
    });
  }, [bottom, bottomOnKeyboardDidShow, bottomOnKeyboardDidHide]);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(messages: IMessage[]) => {}}
        renderInputToolbar={(props) => (
          <InputToolbar
            containerStyle={{
              backgroundColor: 'blue',
              borderWidth: 0,
              bottom: bottom.value
            }}
            renderComposer={(props) => (
              <TextInputBox
                textInputBoxStyle={{
                  boxStyle: inputStyles.boxStyle,
                  contentStyle: inputStyles.contentStyle
                }}
              />
            )}
            primaryStyle={{}}
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

export default ChatSection;
