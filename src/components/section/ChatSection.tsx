import React, { useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  function send(newMessages: IMessage[]) {
    setMessages(GiftedChat.append(messages, newMessages));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => send(messages)}
      user={{
        _id: 1
      }}
    />
  );
};

export default ChatSection;
