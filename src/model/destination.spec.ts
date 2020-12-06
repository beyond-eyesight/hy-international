import { v4 as uuidv4 } from 'uuid';
import ChatRoomId from 'model/chatRoomId';
import Destination from 'model/destination';

describe('Destination', () => {
  describe('#fromChatRoomId', () => {
    it('should return Destination with Prefix and value', () => {
      const destinationValue = uuidv4();
      const destination = Destination.fromChatRoomId(
        new ChatRoomId(destinationValue)
      );
      expect(destination).toBeDefined();
      expect(destination.toString()).toEqual(
        `/sub/chat/room/${destinationValue}`
      );
    });
  });
});
