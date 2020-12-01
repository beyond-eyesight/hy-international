// eslint-disable-next-line max-classes-per-file
import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { CompatClient, Message, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import 'text-encoding-polyfill';
import { User } from 'react-native-gifted-chat/lib/Models';

// todo: refac
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const ws = Stomp.over(() => new SockJS('http://localhost:8080/ws-stomp'));

  useEffect(() => {
    ws.connect(
      {
        'accept-version': '1.2'
      },
      onConnect(ws, setMessages, messages)
    );
  }, [ws, messages]);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => onSend(ws, setMessages, messages)}
      user={{
        _id: 4
      }}
    />
  );
};

class ChatMessage implements IMessage {
  _id: string;

  text: string;

  createdAt: Date | number;

  user: User;

  constructor(id: string, text: string, createdAt: Date | number, user: User) {
    this._id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.user = user;
  }
}

class ChatMessageDto {
  constructor(id: string, chatRoomId: string, senderId: string, body: string) {
    this.id = id;
    this.chatRoomId = chatRoomId;
    this.senderId = senderId;
    this.body = body;
  }

  id: string;

  chatRoomId: string;

  senderId: string;

  body: string;

  static fromIMessage(message: IMessage) {
    return new ChatMessageDto(
      message._id as string,
      '110841e3-e6fb-4191-8fd8-5674a5107c33',
      message.user._id as string,
      message.text
    );
  }
}
function onConnect(
  ws: CompatClient,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void,
  messages: IMessage[]
) {
  // todo: 여기에서 파라미터 받는걸로 리
  return () => {
    ws.subscribe(
      `/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33`,
      (message: Message) => {
        const body: ChatMessageDto = JSON.parse(message.body);
        setMessages(
          GiftedChat.append(messages, [
            new ChatMessage(body.id, body.body, new Date(), {
              _id: body.senderId,
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
  };
}

function onSend(
  ws: CompatClient,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void,
  newMessages: IMessage[] = []
) {
  // todo: 여러개의 메시지를 한번에 SEND할 수 있을까?
  newMessages.forEach((newMessage) => {
    const chatMessageDto = ChatMessageDto.fromIMessage(newMessage);
    ws.send(
      `/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33`,
      {
        'content-type': 'application/json'
      },
      JSON.stringify(chatMessageDto)
    );
  });
  setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, newMessages)
  );
}

export default ChatSection;
