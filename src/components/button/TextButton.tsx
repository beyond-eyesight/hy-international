import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Bold } from 'components/text/Typographies';

interface Props {
  containerWidth: string;
  containerHeight: string;
  content: string;
  ellipticalColor: string;
  textColor: string;
  borderRadius: string;
  onPress?: () => void;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Elliptical = styled.TouchableOpacity<{
  ellipticalColor: string;
  textColor: string;
  borderRadius: string;
}>`
  width: 100%;
  height: 100%;
  background: ${({ ellipticalColor }) => ellipticalColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: none;
  color: ${({ textColor }) => textColor};
  align-items: center;
  justify-content: center;
`;

const Content = styled(Bold)`
  flex-direction: row;
  color: ${({ textColor }) => textColor};
  align-self: center;
  font-size: 20px;
`;

const TextButton: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  content,
  ellipticalColor,
  textColor,
  borderRadius,
  onPress
}: Props) => {
  return (
    <Container style={{ width: containerWidth, height: containerHeight }}>
      <Elliptical
        ellipticalColor={ellipticalColor}
        borderRadius={borderRadius}
        textColor={textColor}
        onPress={onPress}
      >
        <Content textColor={textColor}>{content}</Content>
      </Elliptical>
      <Text />
    </Container>
  );
};

export default TextButton;
