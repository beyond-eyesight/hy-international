import React, { useState } from 'react';
import { GiftedChat, IMessage, InputToolbar, InputToolbarProps } from 'react-native-gifted-chat';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import TextInputBox, { TextInputBoxStyle } from '../box/TextInputBox';

interface ToolbarProps extends InputToolbarProps {}

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // scrollToBottom
  // todo: 트랜잭션으로 묶든가 해야할거같은디

  const inputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: 500,
      backgroundColor: 'green'
    },
    contentStyle: {
      width: 500,
      height: 10 + 48,
      paddingBottom: 48,
      borderBottomColor: 'white',
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
              borderTopWidth: 0,
              bottom: 48
            }}
            {...props}
            renderComposer={(props) => (
              <TextInputBox
                textInputBoxStyle={{
                  boxStyle: inputStyles.boxStyle,
                  contentStyle: inputStyles.contentStyle
                }}
              />
            )}
          />
        )}
        user={{
          // todo: remove hard coding
          _id: '1'
        }}
      />
      <KeyboardAvoidingView behavior="padding" />
    </View>
  );
};

export default ChatSection;

// {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
