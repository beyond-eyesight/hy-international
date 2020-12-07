import React, { ReactNode, useContext } from 'react';
import { Container, interfaces } from 'inversify';
import { observable } from 'mobx';
import container from 'src/context/container';

class ContainerStore {
  @observable container = container;
}

const containerStore = new ContainerStore();

export const ApplicationContext = React.createContext(containerStore);

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
  const { container } = useContext(ApplicationContext);
  if (!container) {
    throw new Error();
  }

  return container.get<T>(identifier);
}
