import React from 'react';
import styled from 'styled-components/native';
import { Font } from 'src/layout/font';

const DefaultText = styled.Text<Font>`
  font-family: ${({ fontFamily }: Font) => fontFamily};
  color: ${({ color }: Font) => color};
  font-size: ${({ fontSize }: Font) => fontSize};
  line-height: ${({ lineHeight }: Font) => lineHeight};
`;

export default DefaultText;
