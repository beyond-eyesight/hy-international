import { injectable } from 'inversify';
import { Client, IFrame } from '@stomp/stompjs';
import chatMessage from 'model/chatMessage';
import ChatRoom from 'model/chatRoom';
import ChatMessageDto from 'dto/chatMessageDto';
import createStompClient from 'api/adapter/stompClientFactory';
import { IMessage } from '@stomp/stompjs/esm6/i-message';

@injectable()
export default class ChatApi {
  // todo: move to config file

  private readonly ws: Client;

  constructor() {
    this.ws = createStompClient(
      'ws://localhost:8080/ws-stomp',
      async () => {
        await this.ws.deactivate();
      },
      (frame: IFrame) => {}
    );
  }

  public sendMessage(chatRoom: ChatRoom, chatMessage: chatMessage): void {
    this.assertSocketConnected();
    const header = { 'content-type': 'application/json' };
    const chatMessageDto = ChatMessageDto.fromMessage(chatMessage);
    this.ws.publish({
      destination: chatRoom.id.toString(),
      headers: header,
      body: chatMessageDto.serialize()
    });
  }

  public leaveRoom(chatRoom: ChatRoom): void {
    this.ws.unsubscribe(chatRoom.id.toString());
  }

  public joinRoom(
    chatRoom: ChatRoom,
    subscribeCallback: (message: IMessage) => {}
  ): void {
    this.ws.configure({
      brokerURL: 'ws://localhost:8080/ws-stomp',
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      beforeConnect: () => {},
      onConnect: (frame: IFrame) => {
        this.subscribe(chatRoom, subscribeCallback);
      }
    });
    this.ws.activate();
  }

  private assertSocketConnected() {
    if (!this.ws.active) {
      throw Error('Socket 서버에 연결되지 않은 상태입니다.');
    }
  }

  // todo: check subscribe할 때 콜백이 리턴 값을 가질 수 있을지...
  private subscribe(
    chatRoom: ChatRoom,
    subscribeCallback: (message: IMessage) => {}
  ): void {
    const roomId: string = chatRoom.id.toString();
    const header = {
      id: roomId,
      ack: 'client'
    };
    const destinationPrefix = '/sub/chat/room/';
    this.ws.subscribe(destinationPrefix + roomId, subscribeCallback, header);
  }
}
