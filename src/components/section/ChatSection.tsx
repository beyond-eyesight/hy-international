import React, { useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import { KeyboardAvoidingView, Platform, View } from 'react-native';

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // scrollToBottom
  // todo: 트랜잭션으로 묶든가 해야할거같은디

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
              height: 100,
              borderTopWidth: 0
            }}
            primaryStyle={{
              bottom: 72,
              position: 'absolute'
            }}
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

export default ChatSection;
