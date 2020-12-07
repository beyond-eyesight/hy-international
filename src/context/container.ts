import { Container } from 'inversify';
import { ChatProvider, IProvider } from 'src/context/providers';
import ChatApi from 'src/api/chatApi';
import Types from 'src/api/types';

const container = new Container();

container.bind<IProvider<ChatApi>>(Types.CHAT).to(ChatProvider);

export default container;
