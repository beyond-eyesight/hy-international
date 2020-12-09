import { Client, FrameImpl, IFrame, StompHeaders } from '@stomp/stompjs';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { WS } from 'jest-websocket-mock';
import { IPublishParams } from '@stomp/stompjs/esm6/types';
import ChatMessageDto from 'src/dto/chatMessageDto';

const brokerURL = 'ws://localhost:1234/ws-stomp';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn()
}));

describe('Stomp Client', () => {
  let stompClient: Client;
  afterAll(async () => {
    await disconnect(stompClient);
    WS.clean();
  });
  describe('when server is valid', () => {
    const server: WS = new WS(brokerURL, { verifyClient: () => true });
    const mockOnConnect: (
      frame: IFrame
    ) => void = jest.fn((frame: IFrame) => {});

    it('should Connect & publish SEND message', async () => {
      // given
      stompClient = createClient(() => {}, mockOnConnect);
      // when
      await connect(stompClient, server);
      // then
      await assertConnected(server, mockOnConnect);
      await assertSendMessagePublished(stompClient, server);
    });

    it('should throw Type error when sending message with deactivated state', () => {
      // given
      stompClient = createClient(() => {}, mockOnConnect);
      expect(stompClient.active).toBeFalsy();

      // when & then
      expect(() => sendMessage(stompClient)).toThrow(
        new TypeError("Cannot read property 'publish' of undefined")
      );
    });

    it('should not be connected with deactivate_beforeConnect, but connected after configure', async () => {
      // given
      const mockBeforeConnect = jest.fn(() => {
        stompClient.deactivate();
      });
      stompClient = createClient(mockBeforeConnect, (frame) => {});
      // when
      stompClient.activate();
      // then
      expect(mockBeforeConnect).toBeCalled();

      // when
      stompClient.configure({
        brokerURL,
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        beforeConnect: () => {},
        onConnect: mockOnConnect
      });
      await connect(stompClient, server);
      // then
      await assertConnected(server, mockOnConnect);
    });
  });
});

async function connect(stompClient: Client, server: WS): Promise<void> {
  stompClient.activate();
  server.on('connection', (socket) => {
    socket.send(
      createMessage('CONNECTED', { version: '1.2', 'heart-beat': '0,0' })
    );
  });
  await server.connected;
}

function sendMessage(stompClient: Client): string | ArrayBuffer {
  const chatMessageDto = ChatMessageDto.of(
    uuidv4(),
    new Date(),
    uuidv4(),
    uuidv4(),
    'testBody'
  );
  const body: string = chatMessageDto.serialize();

  const params: IPublishParams = {
    destination: '/topic/chat',
    headers: {
      'content-type': 'application/json'
    },
    body
  };

  const message: FrameImpl = new FrameImpl({
    command: 'SEND',
    headers: {
      destination: '/topic/chat',
      'content-type': 'application/json'
    },
    body
  });
  stompClient.publish(params);
  return message.serialize();
}

async function disconnect(stompClient: Client) {
  await stompClient.deactivate();
  expect(stompClient.active).toBeFalsy();
}

function createClient(
  beforeConnect: () => void,
  onConnect: (frame: IFrame) => void
) {
  return new Client({
    brokerURL,
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
    beforeConnect,
    onConnect
  });
}

function createMessage(
  command: string,
  header: StompHeaders
): string | ArrayBuffer {
  return new FrameImpl({
    command,
    headers: header
  }).serialize();
}

async function assertConnected(
  server: WS,
  mockOnConnect: (frame: IFrame) => void
) {
  const connectMessage: string | ArrayBuffer = createMessage('CONNECT', {
    'accept-version': '1.0,1.1,1.2',
    'heart-beat': '4000,4000'
  });
  await expect(server).toReceiveMessage(connectMessage);
  expect(server).toHaveReceivedMessages([connectMessage]);
  expect(mockOnConnect).toBeCalled();
}

async function assertSendMessagePublished(stompClient: Client, server: WS) {
  const message: string | ArrayBuffer = sendMessage(stompClient);
  await expect(server).toReceiveMessage(message);
  expect(server).toHaveReceivedMessages([message]);
}
