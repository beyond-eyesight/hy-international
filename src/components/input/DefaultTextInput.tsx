import styled from 'styled-components/native';
import React from 'react';
import RNTextInput from 'src/components/input/RNTextInput';
import { grey } from 'src/draw/color';

const Container = styled.View`
  align-items: center;
  text-align: center;
`;

interface Props {
  containerWidth: string;
  containerHeight: string;
  marginTop: string;
  marginBottom: string;
  placeholder: string;
  textAlign?: 'center' | 'left' | 'right' | undefined;
}

const DefaultTextInput: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  marginTop,
  marginBottom,
  placeholder,
  textAlign = 'center'
}: Props) => {
  const radius = 10;
  return (
    <Container
      style={{
        width: containerWidth,
        height: containerHeight,
        marginTop,
        marginBottom
      }}
    >
      <RNTextInput
        borderTopLeftRadius={radius}
        borderTopRightRadius={radius}
        borderBottomLeftRadius={radius}
        borderBottomRightRadius={radius}
        placeHolder={placeholder}
        placeholderTextColor={grey.get('500')}
        textAlign={textAlign}
      />
    </Container>
  );
};

export default DefaultTextInput;
