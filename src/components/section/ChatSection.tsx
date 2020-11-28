import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import 'text-encoding-polyfill';

// todo: refac
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any'
        }
      }
    ]);
  }, []);

  const ws = Stomp.over(() => new SockJS('http://localhost:8080/ws-stomp'));
  const headers = {
    'accept-version': '1.2'
  };

  // function send(newMessages: IMessage[]) {
  //   ws.connect(headers, () => {
  //     ws.subscribe(
  //       `/sub/chat/room/11084123-e6fb-4191-8fd8-5674a5107c33`,
  //       () => {},
  //       {
  //         id: '1',
  //         ack: 'client'
  //       }
  //     );
  //   });
  //   setMessages(GiftedChat.append(messages, newMessages));
  // }

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => onSend(messages)}
      user={{
        _id: 1
      }}
    />
  );
};

export default ChatSection;
