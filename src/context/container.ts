import { Container } from 'inversify';
import { IProvider, NameProvider } from './providers';

const container = new Container();

container.bind<IProvider<string>>('nameProvider').to(NameProvider);

export default container;
