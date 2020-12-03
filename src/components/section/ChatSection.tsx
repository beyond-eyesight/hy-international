import React, { useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { CompatClient, Message, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import 'text-encoding-polyfill';
import ChatMessage from '../../model/chatMessage';
import ChatMessageDto from '../../dto/chatMessageDto';

const ws = Stomp.over(() => new SockJS('http://localhost:8080/ws-stomp'));
// todo: refac
const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  // todo: remove hardcoding
  useEffect(() => {
    ws.connect(
      // todo: extract variable
      {
        'accept-version': '1.2'
      },
      onConnect(
        ws,
        setMessages,
        // todo: remove hard coding
        '/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33',
        messages
      )
    );
  }, [messages]);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => onSend(ws, setMessages, messages)}
      user={{
        // todo: remove hard coding
        _id: 4
      }}
    />
  );
};

function onConnect(
  ws: CompatClient,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void,
  destination: string,
  messages: IMessage[]
) {
  // todo: 여기에서 파라미터 받는걸로 리팩
  return () => {
    ws.subscribe(
      destination,
      (message: Message) => {
        const chatMessageDto: ChatMessageDto = JSON.parse(message.body);
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [
            ChatMessage.fromDto(chatMessageDto)
          ])
        );
      },
      // todo: remove hard coding
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
    ws.send(
      `/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33`,
      {
        'content-type': 'application/json'
      },
      JSON.stringify(ChatMessageDto.fromIMessage(newMessage))
    );
  });
  setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, newMessages)
  );
}

export default ChatSection;
