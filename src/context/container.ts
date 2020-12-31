import { Container } from 'inversify';
import ChatApi from 'src/api/chatApi';
import Types from 'src/api/types';
import ZoneApi from 'src/api/zoneApi';
import ZoneProvider from 'src/context/providers/zoneProvider';
import { ChatProvider, IProvider } from 'src/context/providers/chatProvider';

const container = new Container();

container.bind<IProvider<ChatApi>>(Types.CHAT).to(ChatProvider);
container.bind<IProvider<ZoneApi>>(Types.ZONE).to(ZoneProvider);

export default container;
