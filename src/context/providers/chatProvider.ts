import 'reflect-metadata';
import { injectable } from 'inversify';
import ChatApi from 'src/api/chatApi';

export interface IProvider<T> {
  provide(): T;
}

interface Bean<T> {}

@injectable()
export class ChatProvider implements IProvider<ChatApi> {
  private readonly chatApi = new ChatApi();

  provide(): ChatApi {
    return this.chatApi;
  }
}
