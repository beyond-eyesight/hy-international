import React from 'react';
import { RegisteredStyle, View, ViewStyle } from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: RegisteredStyle<ViewStyle> | ViewStyle;
  statusBarColor?: string;
}

export default function ContainerWithStatusBar({
  children,
  style,
  statusBarColor
}: Props) {
  return <View />;
}
