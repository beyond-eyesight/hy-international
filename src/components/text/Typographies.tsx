import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';

export const Bold = styled(RNText).attrs({ fontType: 'BOLD' })``;
export const Regular = styled(RNText).attrs({ fontType: 'REGULAR' })``;

export const Bold18 = styled(Bold)`
  font-size: 18px;
  line-height: 26px;
`;

export default Bold18;
