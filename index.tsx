/**
 * @format
 */

import React from 'react';
import { Navigation } from 'react-native-navigation';
import 'reflect-metadata';
import 'text-encoding';
import { SCREEN_IDS } from 'src/components/screens/constant';
import SignUpScreen from 'src/components/screens/SignUpScreen';
import SignInScreen from 'src/components/screens/SignInScreen';
import ZoneScreen from 'src/components/screens/ZoneScreen';
import ChatScreen from 'src/components/screens/ChatScreen';

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
  Navigation.registerComponent(id, () => Component);
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
