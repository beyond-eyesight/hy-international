import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import colors from 'src/utils/color';

type FontType = 'BOLD' | 'REGULAR' | 'LIGHT';

const fontTypeToFont: { [key in FontType]: string } = {
  BOLD: 'ProximaNova-Bold',
  REGULAR: 'ProximaNova-Regular',
  LIGHT: 'ProximaNovaA-Light'
};

const DefaultTextInput = styled.TextInput<{ textAlign: string }>`
  color: ${colors.gray450};
  background: ${colors.gray_1};
  border: solid ${colors.gray_2};
  font-size: 18px;
  font-family: ${fontTypeToFont.REGULAR};
  text-align: ${({ textAlign }) => textAlign};
`;

interface Props extends TextInputProps {
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  placeHolder: string;
  placeholderTextColor: string;
  containerWidth?: string;
  containerHeight?: string;
}

export default function RNTextInput({
  borderTopLeftRadius = 0,
  borderTopRightRadius = 0,
  borderBottomLeftRadius = 0,
  borderBottomRightRadius = 0,
  placeHolder,
  placeholderTextColor,
  containerWidth = '100%',
  containerHeight = '100%'
}: Props) {
  return (
    <DefaultTextInput
      style={{
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        width: containerWidth,
        height: containerHeight
      }}
      placeholder={placeHolder}
      placeholderTextColor={placeholderTextColor}
      textAlign="center"
    />
  );
}
