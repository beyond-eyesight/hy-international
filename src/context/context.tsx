import React, { ReactNode, useContext } from 'react';
import { Container, interfaces } from 'inversify';

const ApplicationContext = React.createContext<{ container: Container | null }>(
  {
    container: null
  }
);

type Props = {
  container: Container;
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ container, children }: Props) => {
  return (
    <ApplicationContext.Provider value={{ container }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const Consumer: React.FC = () => {
  return <ApplicationContext.Consumer>{}</ApplicationContext.Consumer>;
};

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
  const { container } = useContext(ApplicationContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}
