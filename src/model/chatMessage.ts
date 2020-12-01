import { IMessage } from 'react-native-gifted-chat';
import { User } from 'react-native-gifted-chat/lib/Models';
import ChatMessageDto from '../dto/ChatMessageDto';

export default class ChatMessage implements IMessage {
  _id: string;

  text: string;

  createdAt: Date;

  user: User;

  constructor(id: string, text: string, createdAt: Date, user: User) {
    this._id = id;
    this.text = text;
    this.createdAt = createdAt;
    this.user = user;
  }

  static fromDto(chatMessageDto: ChatMessageDto) {
    return new ChatMessage(
      chatMessageDto.id,
      chatMessageDto.body,
      chatMessageDto.createdAt,
      { _id: chatMessageDto.senderId }
    );
  }
}
