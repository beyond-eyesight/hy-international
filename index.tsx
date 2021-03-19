/**
 * @format
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import 'reflect-metadata';
import 'text-encoding';
import { Provider } from 'react-native-paper';
import { SCREEN_IDS } from 'src/screens/constant';
import SignUpScreen from 'src/screens/SignUpScreen';
import SignInScreen from 'src/screens/SignInScreen';
import ZoneScreen from 'src/screens/ZoneScreen';
import ChatScreen from 'src/screens/ChatScreen';
import theme from 'draw/theme/theme';

interface IScreenProps {
  id: string;
  Component: React.FC<any>;
}

const screens: IScreenProps[] = [
  {
    id: SCREEN_IDS.SignUpScreen,
    Component: SignUpScreen
  },
  {
    id: SCREEN_IDS.SignInScreen,
    Component: SignInScreen
  },
  {
    id: SCREEN_IDS.ZoneScreen,
    Component: ZoneScreen
  },
  {
    id: SCREEN_IDS.ChatScreen,
    Component: ChatScreen
  }
];

screens.forEach((screen) => {
  const { id, Component } = screen;
  Navigation.registerComponent(
    id,
    () => (props) => (
      <Provider theme={theme}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </Provider>
    ),
    () => Component
  );
});

Navigation.setDefaultOptions({
  topBar: {
    animate: false,
    drawBehind: true,
    visible: false
  }
});
Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREEN_IDS.SignInScreen
            }
          }
        ]
      }
    }
  });
});
