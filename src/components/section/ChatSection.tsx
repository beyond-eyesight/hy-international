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
import TextButton from '../button/TextButton';

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
      width: 100,
      height: 30,
      backgroundColor: 'red'
    },
    contentStyle: {
      width: 100,
      backgroundColor: 'red',
      height: 30
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
        renderActions={(props) => null}
        renderInputToolbar={(props) => (
          <InputToolbar
            renderActions={(props) => null}
            containerStyle={{
              backgroundColor: 'blue',
              borderWidth: 0,
              bottom: bottom.value
            }}
            renderComposer={(props) => (
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between'
                }}
              >
                <TextInputBox
                  textInputBoxStyle={{
                    boxStyle: inputStyles.boxStyle,
                    contentStyle: inputStyles.contentStyle
                  }}
                />
                <TextButton
                  width="300px"
                  height="20px"
                  content="SE"
                  ellipticalColor="black"
                  textColor="white"
                  borderRadius="0px"
                />
              </View>
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
