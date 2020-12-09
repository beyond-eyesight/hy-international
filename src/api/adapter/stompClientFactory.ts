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

  // todo: appendingMissingNullonIncoming: true 는 메시지의 크기가 커지면 문제가 될 수 있다고 한다. 현재는 리액티 네이티브에서 이 옵션이 필요한데,
  //  나중에 리액트 네이티브가 업데이트되면 이 옵션이 필요 없어질 수 있다. 그 때 지우기!
  //  reference: https://stomp-js.github.io/workaround/stompjs/rx-stomp/ng2-stompjs/react-native-additional-notes.html
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
