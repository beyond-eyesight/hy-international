import React from 'react';
import styled from 'styled-components/native';
import { Bold } from '../text/Typographies';

interface Props {
  containerWidth: string;
  containerHeight: string;
  content: string;
  ellipticalColor: string;
  textColor: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Elliptical = styled.TouchableOpacity<{
  ellipticalColor: string;
  textColor: string;
}>`
  width: 100%;
  height: 100%;
  background: ${({ ellipticalColor }) => ellipticalColor};
  border-radius: 100px;
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

const DefaultButton: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  content,
  ellipticalColor,
  textColor
}: Props) => {
  return (
    <Container style={{ width: containerWidth, height: containerHeight }}>
      <Elliptical ellipticalColor={ellipticalColor} textColor={textColor}>
        <Content textColor={textColor}>{content}</Content>
      </Elliptical>
    </Container>
  );
};

export default DefaultButton;
