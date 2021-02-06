import React from 'react';
import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';
import colors from 'src/utils/color';

const Container = styled.View`
  align-items: center;
  text-align: center;
`;

interface Props {
  containerWidth: string;
  containerHeight: string;
  marginTop: string;
  marginBottom: string;
  textAlign?: string;
}

const Content = styled(RNText).attrs({
  fontType: 'REGULAR',
  textColor: colors.black
})`
  font-size: 20px;
`;

const DefaultText: React.FC<Props> = ({
  containerWidth,
  containerHeight,
  marginTop,
  marginBottom,
  textAlign = 'auto'
}: Props) => {
  return (
    <Container
      style={{
        width: containerWidth,
        height: containerHeight,
        marginTop,
        marginBottom
      }}
    >
      <Content>haha</Content>
    </Container>
  );
};

export default DefaultText;
