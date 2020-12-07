import { injectable } from 'inversify';
import { Client, Message } from '@stomp/stompjs';
import chatMessage from 'model/chatMessage';
import ChatRoom from 'model/chatRoom';
import ChatMessageDto from 'dto/chatMessageDto';
import createStompClient from 'api/adapter/stompClientFactory';

@injectable()
export default class ChatApi {
  private readonly ws: Client;

  constructor() {
    this.ws = createStompClient('ws://localhost:8080/ws-stomp', () => {});
  }

  public sendMessage(chatRoom: ChatRoom, chatMessage: chatMessage): void {
    const header = { 'content-type': 'application/json' };
    const chatMessageDto = ChatMessageDto.fromMessage(chatMessage);
    this.ws.publish({
      destination: chatRoom.id.toString(),
      headers: header,
      body: chatMessageDto.serialize()
    });
  }

  public joinRoom(chatRoom: ChatRoom): void {
    const header = {
      // todo: clientId로 수정
      id: '1',
      ack: 'client'
    };
    this.subscribe(chatRoom);
  }

  private subscribe(chatRoom: ChatRoom) {
    this.ws.subscribe(
      chatRoom.id.toString(),
      (message: Message): ChatMessageDto => {
        // todo: ChatMessageDto의 static 메소드로 refac
        return JSON.parse(message.body);
      }
    );
  }
}
