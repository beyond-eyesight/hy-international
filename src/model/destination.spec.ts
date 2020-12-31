import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Destination from 'src/model/destination';
import ZoneId from 'src/model/zoneId';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn()
}));

describe('Destination', () => {
  describe('#fromChatRoomId', () => {
    it('should return Destination with Prefix and value', () => {
      const destinationValue = uuidv4();
      const destination = Destination.fromChatRoomId(
        new ZoneId(destinationValue)
      );
      expect(destination).toBeDefined();
      expect(destination.toString()).toEqual(
        `/sub/chat/room/${destinationValue}`
      );
    });
  });
});
