import React from 'react';
import { grey, white } from 'src/draw/color';
import { StyleSheet } from 'react-native';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';

interface Props {
  containerWidth: string;
  containerHeight: string;
  title: string;
}

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
    <TextBox
      boxStyle={textBoxProps.boxStyle}
      textStyle={textBoxProps.textStyle}
    >
      {title}
    </TextBox>
  );
};

export default Board;
