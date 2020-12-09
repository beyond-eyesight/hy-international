import { injectable } from 'inversify';
import { Client, IFrame } from '@stomp/stompjs';
import { IMessage as StompMessage } from '@stomp/stompjs/esm6/i-message';
import createStompClient, {
  WebSocketVersion
} from 'src/api/adapter/stompClientFactory';
import ChatRoom from 'src/model/chatRoom';
import ChatMessageDto from 'src/dto/chatMessageDto';
import ChatRoomId from 'src/model/chatRoomId';

@injectable()
export default class ChatApi {
  private readonly ws: Client;

  constructor() {
    this.ws = createStompClient(
      'INVALID_URL',
      {
        beforeConnect: async () => {
          await this.ws.deactivate();
        }
      },
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
    chatRoomId: ChatRoomId,
    subscribeCallback: (message: StompMessage) => void
  ): void {
    this.ws.configure({
      brokerURL: 'ws://localhost:8080/ws-stomp',
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      beforeConnect: () => {},
      onConnect: (frame: IFrame) => {
        this.subscribe(chatRoomId, subscribeCallback);
      }
    });
    this.ws.activate();
  }

  private assertSocketConnected() {
    if (!this.ws.active) {
      throw Error('Socket 서버에 연결되지 않은 상태입니다.');
    }
  }

  // todo: appendingMissingNullonIncoming: true 는 메시지의 크기가 커지면 문제가 될 수 있다고 한다. 현재는 리액티 네이티브에서 이 옵션이 필요한데,
  //  나중에 리액트 네이티브가 업데이트되면 이 옵션이 필요 없어질 수 있다. 그 때 지우기!
  //  reference: https://stomp-js.github.io/workaround/stompjs/rx-stomp/ng2-stompjs/react-native-additional-notes.html

  // todo: check subscribe할 때 콜백이 리턴 값을 가질 수 있을지...
  private subscribe(
    chatRoomId: ChatRoomId,
    subscribeCallback: (message: StompMessage) => void
  ): void {
    const roomId: string = chatRoomId.toString();
    const header = {
      id: roomId,
      ack: 'client'
    };
    // todo: config 파일로 옮기
    const destinationPrefix = '/sub/chat/room/';
    this.ws.subscribe(destinationPrefix + roomId, subscribeCallback, header);
  }
}
