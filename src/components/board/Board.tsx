import React from 'react';
import styled from 'styled-components/native';
import { grey, white } from 'src/draw/color';
import { StyleSheet } from 'react-native';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';

interface Props {
  containerWidth: string;
  containerHeight: string;
  title: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: grey.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: 40,
    lineHeight: 40,
    color: white
  }
});

const Board: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  title
}: Props) => {
  return (
    <Container
      style={{
        width: containerWidth,
        height: containerHeight
      }}
    >
      <TextBox
        boxStyle={textBoxProps.boxStyle}
        textStyle={textBoxProps.textStyle}
      >
        {title}
      </TextBox>
    </Container>
  );
};

export default Board;
