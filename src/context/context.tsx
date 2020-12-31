import React, { ReactNode, useContext } from 'react';
import { Container, interfaces } from 'inversify';
import { observable } from 'mobx';
import container from 'src/context/container';
import Zone from 'src/model/zone';

class Store {
  @observable container = container;

  @observable chatRooms: Zone[] = [
    Zone.of('110841e3-e6fb-4191-8fd8-5674a5107c33', 'Wangsimni'),
    Zone.of('c2c38f51-bbdb-4e49-8074-a11e129b7061', 'Campus'),
    Zone.of('cf09f864-f391-464a-ad9b-bc9086f4aa05', 'Itaewon')
  ];
}

const store = new Store();

export const ApplicationContext = React.createContext(store);

type Props = {
  container: Container;
  children: ReactNode;
};

const UselessContext = React.createContext<{ container: Container | null }>({
  container: null
});

export const ContextProvider: React.FC<Props> = ({
  container,
  children
}: Props) => {
  return (
    <UselessContext.Provider value={{ container }}>
      {children}
    </UselessContext.Provider>
  );
};

export function useInjection<T>(
  identifier: interfaces.ServiceIdentifier<T>
): T {
  const { container } = useContext(UselessContext);
  if (!container) {
    throw new Error();
  }

  return container.get<T>(identifier);
}
