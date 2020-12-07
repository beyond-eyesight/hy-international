import { Client, IFrame, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const createStompClient = (
  url: string,
  beforeConnect: () => void,
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
    beforeConnect,
    onConnect
  });
};

// todo: ReactNative에 내장된 WebSocket도 넣어주기
enum WebSocketVersion {
  STANDARD = 'STANDARD',
  SOCKJS = 'SOCKJS'
}

export default createStompClient;
