import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { IconButton } from 'react-native-paper';
import Percentage from 'src/draw/size/percentage';
import Pixel from 'src/draw/size/pixel';
import runningDeviceModel from 'src/draw/device/model/deviceModel';
import TextInputBox, {
  TextInputBoxStyle
} from 'src/components/box/TextInputBox';

const deviceWidth: Pixel = runningDeviceModel._width;
const deviceHeight: Pixel = runningDeviceModel._height;

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
  const containerStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between'
    }
  });
  const inputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {},
    contentStyle: {
      width: deviceWidth.multiply(new Percentage(80)).value,
      backgroundColor: 'red',
      height: deviceHeight.multiply(new Percentage(7)).value
    }
  });

  return (
    <View style={containerStyle.container}>
      <TextInputBox
        textInputBoxStyle={{
          boxStyle: inputStyles.boxStyle,
          contentStyle: inputStyles.contentStyle
        }}
      />
      <IconButton
        icon="send"
        color="white"
        size={deviceWidth.multiply(new Percentage(6)).value}
        style={{
          alignSelf: 'center'
        }}
      />
    </View>
  );
};

const InputBar: React.FC<{ bottom: Pixel }> = (props: { bottom: Pixel }) => {
  const { bottom } = props;

  const containerStyles = StyleSheet.create({
    container: {
      height: deviceHeight.multiply(new Percentage(7)).value,
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
