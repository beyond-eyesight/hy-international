import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { CompatClient, Message, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import 'text-encoding-polyfill';
import { User } from 'react-native-gifted-chat/lib/Models';
import { StompHeaders } from '@stomp/stompjs/esm6/stomp-headers';

class MessageType implements IMessage {
  _id: string | number;

  text: string;

  createdAt: Date | number;

  user: User;

  constructor(
    id: string | number,
    text: string,
    createdAt: Date | number,
    user: User
  ) {
    this._id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.user = user;
  }
}

interface ISubscribe {
  (
    destination: string,
    callback: (message: Message) => void,
    header?: StompHeaders
  ): void;
}

// todo: refac
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const ws = Stomp.over(() => new SockJS('http://localhost:8080/ws-stomp'));

  useEffect(() => {
    ws.connect(
      {
        'accept-version': '1.2'
      },
      () => {
        ws.subscribe(
          `/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33`,
          (message: Message) => {
            const body = JSON.parse(message.body);
            setMessages(
              GiftedChat.append(messages, [
                new MessageType(body.id, body.body, new Date(), {
                  _id: body.sender,
                  name: 'Juhyun',
                  avatar: 'https://placeimg.com/140/140/any'
                })
              ])
            );
          },
          {
            id: '1',
            ack: 'client'
          }
        );
      }
    );
  }, [ws, messages]);
  const onSend = useCallback(
    (newMessages: IMessage[] = []) => {
      const body =
        '{' +
        '"id": "110841e3-e6fb-4191-8fd8-5674a5107c33",' +
        '"chatRoomId": "110841e3-e6fb-4191-8fd8-5674a5107c33",' +
        '"sender": "110841e3-e6fb-4191-8fd8-5674a5107c33",' +
        '"body": "kiki"' +
        '}';
      ws.send(
        `/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33`,
        {
          'content-type': 'application/json'
        },
        body
      );
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages)
      );
    },
    [ws]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => onSend(messages)}
      user={{
        _id: 4
      }}
    />
  );
};

export default ChatSection;
