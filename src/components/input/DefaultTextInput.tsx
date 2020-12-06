import styled from 'styled-components/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import RNTextInput from 'components/input/RNTextInput';
import colors from 'styles/color';

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
  textAlign?: string;
}

const DefaultTextInput: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  marginTop,
  marginBottom,
  placeholder,
  textAlign = 'auto'
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
        placeholderTextColor={colors.gray500}
        textAlign={textAlign}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  BLOCK_SIZE: {
    height: '23%',
    width: '85%'
  }
});

export default DefaultTextInput;
