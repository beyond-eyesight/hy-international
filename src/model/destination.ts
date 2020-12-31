import ZoneId from 'src/model/zoneId';

export default class Destination {
  private static CHAT_ROOM_PREFIX = `/sub/chat/room/`;

  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  public static fromChatRoomId(chatRoomId: ZoneId): Destination {
    return new Destination(chatRoomId.toString());
  }

  public toString = (): string => {
    return Destination.CHAT_ROOM_PREFIX + this.value;
  };
}
