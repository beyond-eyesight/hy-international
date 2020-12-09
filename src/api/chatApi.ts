import { injectable } from 'inversify';
import { Client, IFrame } from '@stomp/stompjs';
import { IMessage as StompMessage } from '@stomp/stompjs/esm6/i-message';
import createStompClient, {
  WebSocketVersion
} from 'src/api/adapter/stompClientFactory';
import ChatRoom from 'src/model/chatRoom';
import ChatMessageDto from 'src/dto/chatMessageDto';
import ChatRoomId from 'src/model/chatRoomId';
import 'text-encoding';

@injectable()
export default class ChatApi {
  // todo: move to config file

  private readonly ws: Client;

  constructor() {
    this.ws = createStompClient(
      'http://localhost:8080/ws-stomp',
      () => {},
      (frame: IFrame) => {},
      WebSocketVersion.STANDARD
    );
  }

  public sendMessage(
    chatRoomId: ChatRoomId,
    chatMessageDto: ChatMessageDto
  ): void {
    this.assertSocketConnected();
    const header = { 'content-type': 'application/json' };
    this.ws.publish({
      destination: chatRoomId.toString(),
      headers: header,
      body: chatMessageDto.serialize()
    });
  }

  public leaveRoom(chatRoom: ChatRoom): void {
    this.ws.unsubscribe(chatRoom.id.toString());
  }

  public joinRoom(
    chatRoom: ChatRoom,
    subscribeCallback: (message: StompMessage) => void
  ): void {
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
    subscribeCallback: (message: StompMessage) => void
  ): void {
    const roomId: string = '3';
    const header = {
      id: roomId,
      ack: 'client'
    };
    const destinationPrefix = '/sub/chat/room/';
    this.ws.subscribe(destinationPrefix + roomId, subscribeCallback, header);
  }
}
