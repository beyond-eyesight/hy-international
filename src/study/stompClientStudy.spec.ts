import { Client, FrameImpl, IFrame } from '@stomp/stompjs';

import { v4 as uuidv4 } from 'uuid';
import { WS } from 'jest-websocket-mock';
import { IPublishParams } from '@stomp/stompjs/esm6/types';
import ChatMessageDto from '../dto/chatMessageDto';

const brokerURL = 'ws://localhost:1234/ws-stomp';
const server = new WS(brokerURL);
const stompClient = new Client({
  brokerURL,
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  onConnect: (frame: IFrame) => {}
});

describe('Stomp Client', () => {
  afterAll(() => {
    stompClient.deactivate();
    server.close();
  });
  it('should ', async () => {
    await testConnect();
    await testSend();
  });
});

async function testConnect() {
  // given
  const connectMessage: string | ArrayBuffer = new FrameImpl({
    command: 'CONNECT',
    headers: { 'accept-version': '1.0,1.1,1.2', 'heart-beat': '4000,4000' }
  }).serialize();
  // when
  stompClient.activate();
  await server.connected;
  // then
  await expect(server).toReceiveMessage(connectMessage);
  expect(server).toHaveReceivedMessages([connectMessage]);
}

async function testSend() {
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

  const sendMessage: string | ArrayBuffer = new FrameImpl({
    command: 'SEND',
    headers: {
      destination: '/topic/chat',
      'content-type': 'application/json'
    },
    body
  }).serialize();
  stompClient.publish(params);
  await expect(server).toReceiveMessage(sendMessage);
  expect(server).toHaveReceivedMessages([sendMessage]);
}
