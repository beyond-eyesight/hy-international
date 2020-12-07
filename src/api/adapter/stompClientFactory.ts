import { Client, IFrame, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const createStompClient = (
  url: string,
  onConnect: (frame: IFrame) => void,
  webSocketVersion: WebSocketVersion = WebSocketVersion.STANDARD
): Client => {
  if (webSocketVersion === WebSocketVersion.SOCKJS) {
    return Stomp.over(() => new SockJS(url));
  }
  return new Client({
    brokerURL: url,
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    onConnect
  });
};

enum WebSocketVersion {
  STANDARD = 'STANDARD',
  SOCKJS = 'SOCKJS'
}

export default createStompClient;
