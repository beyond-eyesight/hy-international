import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Button } from 'react-native-paper';
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
        renderInputToolbar={(props) => <InputBar bottom={bottom} />}
        user={{
          // todo: remove hard coding
          _id: '1'
        }}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

const Composer: React.FC = () => {
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

  return (
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
      <Button mode="text" color="white">
        haha
      </Button>
    </View>
  );
};

const InputBar: React.FC<{ bottom: Pixel }> = (props: { bottom: Pixel }) => {
  const { bottom } = props;

  const containerStyles = StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      borderWidth: 0,
      bottom: bottom.value
    }
  });

  return (
    <InputToolbar
      renderActions={() => null}
      containerStyle={containerStyles.container}
      renderComposer={(props) => <Composer />}
      primaryStyle={{}}
    />
  );
};

export default ChatSection;
