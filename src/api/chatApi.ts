import { injectable } from 'inversify';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import chatMessage from 'model/chatMessage';
import ChatRoom from 'model/chatRoom';
import ChatMessageDto from 'dto/chatMessageDto';

@injectable()
export default class ChatApi {
  private readonly ws = Stomp.over(
    () => new SockJS('http://localhost:8080/ws-stomp')
  );

  public send(chatRoom: ChatRoom, chatMessage: chatMessage) {
    const header = { 'content-type': 'application/json' };
    const chatMessageDto = ChatMessageDto.fromMessage(chatMessage);
    this.ws.send(chatRoom.id.toString(), header, chatMessageDto.serialize());
  }
}
