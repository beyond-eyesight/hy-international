import React, { useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import Zone from 'src/model/zone';

// todo: userId 하드코딩 제거!
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  // todo: 트랜잭션으로 묶든가 해야할거같은디

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => {}}
      user={{
        // todo: remove hard coding
        _id: '1'
      }}
    />
  );
};

export default ChatSection;
