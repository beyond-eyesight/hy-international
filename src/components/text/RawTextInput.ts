import styled from 'styled-components/native';
import { Font } from 'src/draw/text/font';
import { Placeholder } from 'src/draw/text/placeholder';

interface TextInputProps extends Font, Placeholder {}

const RawTextInput = styled.TextInput<TextInputProps>`
  font-family: ${({ fontFamily }: Font) => fontFamily};
  color: ${({ color }: Font) => color};
  font-size: ${({ fontSize }: Font) => fontSize};
  line-height: ${({ lineHeight }: Font) => lineHeight};
`;

export default RawTextInput;
