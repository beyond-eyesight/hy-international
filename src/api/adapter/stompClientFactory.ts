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

  if (webSocketVersion === WebSocketVersion.REACT_NATIVE) {
    return Stomp.over(() => new WebSocket(url));
  }
  return new Client({
    brokerURL: 'ws://localhost:8080/ws-stomp',
    reconnectDelay: 0,
    heartbeatIncoming: 5000,
    heartbeatOutgoing: 5000,
    forceBinaryWSFrames: true,
    appendMissingNULLonIncoming: true,
    connectHeaders: {
      'accept-version': '1.2',
      host: 'localhost'
    },
    onConnect: (frame: IFrame) => {}
  });
};

// todo: ReactNative에 내장된 WebSocket도 넣어주기
export enum WebSocketVersion {
  STANDARD = 'STANDARD',
  SOCKJS = 'SOCKJS',
  REACT_NATIVE = 'REACT_NATIVE'
}

export default createStompClient;
