import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import ZoneId from 'src/model/zoneId';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn()
}));

describe('ChatRoomId', () => {
  describe('#constructor', () => {
    it('should return ChatRoomId object with valid uuid', () => {
      const chatRoomId = new ZoneId(uuidv4());
      expect(chatRoomId).toBeDefined();
    });
    it('should throw Error with invalid value', () => {
      expect(() => new ZoneId('invalid uuid')).toThrowError();
    });
  });
  describe('#toString', () => {
    it('should return value injected by constructor', () => {
      const value: string = uuidv4();
      const chatRoomId: ZoneId = new ZoneId(value);
      expect(chatRoomId.toString()).toEqual(value);
    });
  });
});
