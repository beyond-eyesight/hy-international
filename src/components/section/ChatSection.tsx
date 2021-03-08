import React, { useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // scrollToBottom
  // todo: 트랜잭션으로 묶든가 해야할거같은디
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => {}}
      renderActions={() => null}
      renderInputToolbar={(props) => (
        <InputToolbar
          containerStyle={{
            position: 'relative',
            backgroundColor: 'red',
            borderTopWidth: 1.5,
            borderTopColor: '#333'
          }}
          primaryStyle={{
            backgroundColor: 'blue',
            position: 'relative'
          }}
          {...props}
        />
      )}
      user={{
        // todo: remove hard coding
        _id: '1'
      }}
    />
  );
};

export default ChatSection;
