import { Client, CompatClient, Stomp, StompConfig } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const createStompClient = (
  url: string,
  stompConfig: StompConfig,
  webSocketVersion: WebSocketVersion = WebSocketVersion.STANDARD
): Client => {
  if (webSocketVersion === WebSocketVersion.SOCKJS) {
    const compatClient: CompatClient = Stomp.over(() => new SockJS(url));
    compatClient.configure(stompConfig);
    return compatClient;
  }

  if (webSocketVersion === WebSocketVersion.REACT_NATIVE) {
    const compatClient: CompatClient = Stomp.over(() => new WebSocket(url));
    compatClient.configure(stompConfig);
    return compatClient;
  }

  return new Client(stompConfig);
};

export enum WebSocketVersion {
  STANDARD = 'STANDARD',
  SOCKJS = 'SOCKJS',
  REACT_NATIVE = 'REACT_NATIVE'
}

export default createStompClient;
