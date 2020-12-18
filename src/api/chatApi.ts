import { injectable } from 'inversify';
import { Client, IFrame } from '@stomp/stompjs';
import { IMessage as StompMessage } from '@stomp/stompjs/esm6/i-message';
import createStompClient, {
  WebSocketVersion
} from 'src/api/adapter/stompClientFactory';
import ChatMessageDto from 'src/dto/chatMessageDto';
import ChatRoomId from 'src/model/chatRoomId';
import { AxiosInstance } from 'axios';
import createAxios from 'src/api/adapter/axiosFactory';

@injectable()
export default class ChatApi {
  // todo: config 파일로 옮기
  private static readonly DESTINATION_PREFIX = '/sub/chat/room/';

  private readonly httpClient: AxiosInstance;

  private readonly stompClient: Client;

  constructor() {
    this.httpClient = createAxios({ baseURL: 'http://localhost:3000/' });
    this.stompClient = createStompClient(
      'INVALID_URL',
      {
        beforeConnect: async () => {
          await this.stompClient.deactivate();
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

    this.stompClient.publish({
      destination: ChatApi.DESTINATION_PREFIX + chatRoomId.toString(),
      headers: header,
      body: chatMessageDto.serialize()
    });
  }

  public leaveRoom(chatRoomId: ChatRoomId): void {
    this.stompClient.unsubscribe(chatRoomId.toString());
  }

  public joinRoom(
    chatRoomId: ChatRoomId,
    subscribeCallback: (message: StompMessage) => void
  ): void {
    this.stompClient.configure({
      brokerURL: 'ws://localhost:8080/ws-stomp',
      forceBinaryWSFrames: true,
      appendMissingNULLonIncoming: true,
      beforeConnect: () => {},
      onConnect: (frame: IFrame) => {
        this.subscribe(chatRoomId, subscribeCallback);
      }
    });
    this.stompClient.activate();
  }

  private assertSocketConnected() {
    if (!this.stompClient.active) {
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
    this.stompClient.subscribe(
      ChatApi.DESTINATION_PREFIX + roomId,
      subscribeCallback,
      header
    );
  }
}
