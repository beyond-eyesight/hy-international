import styled from 'styled-components/native';
import { Font, Placeholder } from 'src/layout/font';

interface TextInputProps extends Font, Placeholder {}

const RawTextInput = styled.TextInput<TextInputProps>`
  font-family: ${({ fontFamily }: Font) => fontFamily};
  color: ${({ color }: Font) => color};
  font-size: ${({ fontSize }: Font) => fontSize};
  line-height: ${({ lineHeight }: Font) => lineHeight};
`;

export default RawTextInput;
