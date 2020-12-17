import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

jest.mock('react-native-get-random-values', () => ({
  getRandomBase64: jest.fn()
}));

describe('UUID', () => {
  describe('v4', () => {
    it('should return random uuid', () => {
      console.log(uuidv4());
      expect(uuidv4()).toBeDefined();
    });
  });
});
