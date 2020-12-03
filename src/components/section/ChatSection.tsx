import React, { useCallback, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { CompatClient, Message, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import 'text-encoding-polyfill';
import ChatMessage from '../../model/chatMessage';
import ChatMessageDto from '../../dto/chatMessageDto';

// todo: remove hard coding
const ws = Stomp.over(() => new SockJS('http://localhost:8080/ws-stomp'));
const userId: string = '1';

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
        '/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33'
      )
    );
  }, [messages]);

  const onSend = useCallback((ws: CompatClient, newMessages: IMessage[]) => {
    sendMessages(newMessages, ws);
    renderMessages(setMessages, newMessages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => onSend(ws, messages)}
      user={{
        // todo: remove hard coding
        _id: userId
      }}
    />
  );
};

function onConnect(
  ws: CompatClient,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void,
  destination: string
) {
  // todo: 여기에서 파라미터 받는걸로 리팩
  return () => {
    subscribe(ws, destination, setMessages);
  };
}

function subscribe(
  ws: CompatClient,
  destination: string,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void
) {
  // todo: remove hard coding
  const header = {
    id: '1',
    ack: 'client'
  };
  ws.subscribe(
    destination,
    (message: Message) => {
      const chatMessageDto: ChatMessageDto = JSON.parse(message.body);
      renderMessageOfOthers(chatMessageDto, setMessages);
    },
    header
  );
}

function sendMessages(newMessages: IMessage[], ws: CompatClient) {
  newMessages.forEach((newMessage) => {
    ws.send(
      `/sub/chat/room/110841e3-e6fb-4191-8fd8-5674a5107c33`,
      {
        'content-type': 'application/json'
      },
      JSON.stringify(ChatMessageDto.fromIMessage(newMessage))
    );
  });
}

function renderMessages(
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void,
  newMessages: IMessage[]
) {
  setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, newMessages)
  );
}

function renderMessageOfOthers(
  chatMessageDto: ChatMessageDto,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void
) {
  const chatMessage: ChatMessage = ChatMessage.fromDto(chatMessageDto);
  if (chatMessage.isOwn(userId)) {
    return;
  }
  renderMessages(setMessages, [chatMessage]);
}

export default ChatSection;
