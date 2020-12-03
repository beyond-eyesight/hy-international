import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { Provider } from '../context/context';
import container from '../context/container';

describe('iocReact', () => {
  describe('#useInjection()', () => {
    it('should container be injected to Provider', () => {
      const text: string = 'provider';
      const { getByText } = render(
        <Provider container={container}>
          <Text>{text}</Text>
        </Provider>
      );
      const provider = getByText(text);

      expect(provider.parent?.props.container).toEqual(container);
    });
  });
});

export {};
