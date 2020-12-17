import ChatRoomId from 'src/model/chatRoomId';
import ChatRoomName from 'src/model/chatRoomName';

export default class ChatRoom {
  private readonly _id: ChatRoomId;

  private readonly _name: ChatRoomName;

  get id(): ChatRoomId {
    return this._id;
  }

  get name(): ChatRoomName {
    return this._name;
  }

  static of(id: string, name: string) {
    return new ChatRoom(new ChatRoomId(id), new ChatRoomName(name));
  }

  constructor(id: ChatRoomId, name: ChatRoomName) {
    this._id = id;
    this._name = name;
  }
}
