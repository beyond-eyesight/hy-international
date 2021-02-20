import React from 'react';

import RawText from 'src/components/text/RawText';
import { Font } from 'src/draw/text/font';
import styled from 'styled-components/native';

interface Props {
  font: Font;
  children: React.ReactNode;
}

const Container = styled.View``;
const TextBox: React.FC<Props> = ({ font, children }: Props) => {
  return (
    <Container>
      <RawText
        fontFamily={font.fontFamily}
        fontStyle={font.fontStyle}
        fontSize={font.fontSize}
        lineHeight={font.lineHeight}
        color={font.color}
      >
        {children}
      </RawText>
    </Container>
  );
};

export default TextBox;
