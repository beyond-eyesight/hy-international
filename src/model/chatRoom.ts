import ChatRoomId from 'src/model/chatRoomId';
import ChatRoomName from 'src/model/chatRoomName';

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
