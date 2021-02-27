import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';

export interface Props extends TouchableOpacityProps {
  image: ImageProps['source'];
  style?: ImageProps['style'];
  hitSlopSize?: number;
  onPress?: () => void;
}

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export default function IconButton({
  image,
  style,
  hitSlopSize,
  onPress,
  ...props
}: Props) {
  return (
    <Container hitSlop={getHitSlop(hitSlopSize)} onPress={onPress}>
      <Icon source={image} style={style} />
    </Container>
  );
}

const getHitSlop = (iconSize?: number) => {
  if (iconSize === undefined) {
    return undefined;
  }
  const divisionValue = 2;
  const extendSize = _.floor(iconSize / divisionValue);

  return {
    bottom: extendSize,
    left: extendSize,
    right: extendSize,
    top: extendSize
  };
};
