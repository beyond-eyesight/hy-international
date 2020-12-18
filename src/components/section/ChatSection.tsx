import React, { useCallback, useContext, useEffect, useState } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { CompatClient, Message } from '@stomp/stompjs';
import ChatApi from 'src/api/chatApi';
import { IMessage as StompMessage } from '@stomp/stompjs/esm6/i-message';
import { IProvider } from 'src/context/providers';
import Types from 'src/api/types';
import ChatMessageDto from 'src/dto/chatMessageDto';
import ChatMessage from 'src/model/chatMessage';
import ChatRoom from 'src/model/chatRoom';
import { ApplicationContext } from 'src/context/context';

interface Props {
  chatRoom: ChatRoom;
}

// todo: userId 하드코딩 제거!
const ChatSection: React.FC<Props> = ({ chatRoom }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { container } = useContext(ApplicationContext);
  const chatApi: ChatApi = container
    .get<IProvider<ChatApi>>(Types.CHAT)
    .provide();

  useEffect(() => {
    chatApi.joinRoom(chatRoom.id, (message: StompMessage) => {
      const chatMessageDto: ChatMessageDto = JSON.parse(message.body);
      renderMessageOfOthers(chatMessageDto, setMessages);
    });

    return () => {
      chatApi.leaveRoom(chatRoom.id);
    };
  }, [chatApi, chatRoom.id]);

  // todo: 트랜잭션으로 묶든가 해야할거같은디
  const onSend = useCallback(
    (newMessages: IMessage[]) => {
      function sendMessages(newMessages: IMessage[]) {
        newMessages.forEach((newMessage) => {
          chatApi.sendMessage(
            chatRoom.id,
            ChatMessageDto.fromMessage(newMessage)
          );
        });
      }
      sendMessages(newMessages);
      renderMessages(setMessages, newMessages);
    },
    [chatApi, chatRoom.id]
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages: IMessage[]) => onSend(messages)}
      user={{
        // todo: remove hard coding
        _id: '1'
      }}
    />
  );
};

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
  if (chatMessage.isOwn('1')) {
    return;
  }
  renderMessages(setMessages, [chatMessage]);
}

export default ChatSection;
