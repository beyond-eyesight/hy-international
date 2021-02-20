import React from 'react';

import RawText from 'src/components/text/RawText';
import { Font } from 'src/draw/text/font';

interface Props {
  font: Font;
  children: React.ReactNode;
}
const TextBox: React.FC<Props> = ({ font, children }: Props) => {
  return (
    <RawText
      fontFamily={font.fontFamily}
      fontStyle={font.fontStyle}
      fontSize={font.fontSize}
      lineHeight={font.lineHeight}
      color={font.color}
    >
      {children}
    </RawText>
  );
};

export default TextBox;
