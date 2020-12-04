import ChatRoomId from './chatRoomId';
import ChatRoomName from './chatRoomName';

export default class ChatRoom {
  private readonly _id: ChatRoomId;

  private readonly name: ChatRoomName;

  get id(): ChatRoomId {
    return this._id;
  }

  constructor(id: ChatRoomId, name: ChatRoomName) {
    this._id = id;
    this.name = name;
  }
}
