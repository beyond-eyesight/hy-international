import React from 'react';
import { RegisteredStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'src/draw/device/model/deviceModel';

interface Props {
  children?: React.ReactNode;
  style?: RegisteredStyle<ViewStyle> | ViewStyle;
  statusBarColor?: string;
}

const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight().toString};
`;

const OutterContainer = styled.View<{ backgroundColor?: string }>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default function ContainerWithStatusBar({
  children,
  style,
  statusBarColor
}: Props) {
  return (
    <OutterContainer backgroundColor={statusBarColor}>
      <Container style={style}>{children}</Container>
    </OutterContainer>
  );
}
