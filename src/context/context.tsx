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

export const ContextProvider: React.FC<Props> = ({
  container,
  children
}: Props) => {
  return (
    <ApplicationContext.Provider value={{ container }}>
      {children}
    </ApplicationContext.Provider>
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
