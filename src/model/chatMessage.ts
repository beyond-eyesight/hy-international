import { IMessage } from 'react-native-gifted-chat';
import { User } from 'react-native-gifted-chat/lib/Models';
import ChatMessageDto from 'src/model/dto/chatMessageDto';

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

  static fromDto(chatMessageDto: ChatMessageDto): ChatMessage {
    return new ChatMessage(
      chatMessageDto.id,
      chatMessageDto.body,
      chatMessageDto.createdAt,
      { _id: chatMessageDto.senderId }
    );
  }

  isOwn(userId: string): boolean {
    return this.user._id === userId;
  }
}
