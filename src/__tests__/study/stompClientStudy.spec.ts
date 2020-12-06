import { Client, FrameImpl, IFrame } from '@stomp/stompjs';

import { v4 as uuidv4 } from 'uuid';
import { WS } from 'jest-websocket-mock';
import { IPublishParams } from '@stomp/stompjs/esm6/types';
import ChatMessageDto from 'dto/chatMessageDto';

const brokerURL = 'ws://localhost:1234/ws-stomp';
const server = new WS(brokerURL);
const stompClient = new Client({
  brokerURL,
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  onConnect: (frame: IFrame) => {}
});

async function disconnect() {
  await stompClient.deactivate();
  expect(stompClient.active).toBeFalsy();
}

describe('Stomp Client', () => {
  afterEach(async () => {
    await disconnect();
  });
  it('should publish CONNECT message', async () => {
    // when
    const connectMessage: FrameImpl = await connect();
    // then
    await expect(server).toReceiveMessage(connectMessage.serialize());
    expect(server).toHaveReceivedMessages([connectMessage.serialize()]);
  });
  it('should publish SEND message', async () => {
    // given
    await connect();
    // when
    const message: FrameImpl = sendMessage();
    // then
    await expect(server).toReceiveMessage(message.serialize());
    expect(server).toHaveReceivedMessages([message.serialize()]);
  });
  it('should throw Type error when sending message with deactivated state', async () => {
    // given
    expect(stompClient.active).toBeFalsy();

    expect(() => sendMessage()).toThrow(
      new TypeError("Cannot read property 'publish' of undefined")
    );
  });
});

async function connect(): Promise<FrameImpl> {
  const connectMessage: FrameImpl = new FrameImpl({
    command: 'CONNECT',
    headers: { 'accept-version': '1.0,1.1,1.2', 'heart-beat': '4000,4000' }
  });
  // when
  stompClient.activate();
  await server.connected;
  return connectMessage;
}

function sendMessage(): FrameImpl {
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
  return message;
}

afterAll(async () => {
  await stompClient.deactivate();
  server.close();
});
