import { v4 as uuidv4 } from 'uuid';
import ChatRoomId from 'src/model/chatRoomId';

describe('ChatRoomId', () => {
  describe('#constructor', () => {
    it('should return ChatRoomId object with valid uuid', () => {
      const chatRoomId = new ChatRoomId(uuidv4());
      expect(chatRoomId).toBeDefined();
    });
    it('should throw Error with invalid value', () => {
      expect(() => new ChatRoomId('invalid uuid')).toThrowError();
    });
  });
  describe('#toString', () => {
    it('should return value injected by constructor', () => {
      const value: string = uuidv4();
      const chatRoomId: ChatRoomId = new ChatRoomId(value);
      expect(chatRoomId.toString()).toEqual(value);
    });
  });
});
