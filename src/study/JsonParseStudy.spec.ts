// @ts-ignore
describe('JsonParse', () => {
  describe('#constructor()', () => {
    it('should be defined', () => {
      const body =
        '{' +
        '"id": "110841e3-e6fb-4191-8fd8-5674a5107c33",' +
        '"chatRoomId": "110841e3-e6fb-4191-8fd8-5674a5107c33",' +
        '"sender": "110841e3-e6fb-4191-8fd8-5674a5107c33",' +
        '"body": "hoho"' +
        '}';

      const haha = JSON.parse(body);
      expect(haha).toBeDefined();
    });
  });
});
