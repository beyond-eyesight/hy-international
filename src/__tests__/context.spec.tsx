import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { Container, injectable } from 'inversify';
import 'reflect-metadata';
import { ContextProvider, useInjection } from 'src/context/context';
import { IProvider } from 'src/context/providers/chatProvider';

describe('context', () => {
  describe('#useInjection()', () => {
    it('Provider should be injected', () => {
      // given
      const identifier: string = 'exampleProvider';
      const returnValueOfBean: string = 'World';
      const container = new Container();
      @injectable()
      class ExampleProvider implements IProvider<typeof identifier> {
        provide = () => returnValueOfBean;
      }
      container.bind<IProvider<string>>(identifier).to(ExampleProvider);
      const ExampleChildComponent: React.FC = () => {
        const provider: IProvider<string> = useInjection<
          IProvider<typeof identifier>
        >(identifier);
        return <Text>{provider.provide()}</Text>;
      };

      // when
      const { getByText } = render(
        <ContextProvider container={container}>
          <ExampleChildComponent />
        </ContextProvider>
      );
      const component = getByText(returnValueOfBean);

      // then
      expect(component).toBeDefined();
    });
  });
});
