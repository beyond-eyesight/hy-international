import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

describe('UUID', () => {
  describe('v4', () => {
    it('should return random uuid', () => {
      expect(uuidv4()).toBeDefined();
    });
  });
});
