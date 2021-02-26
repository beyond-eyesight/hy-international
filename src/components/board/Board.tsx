import React from 'react';
import styled from 'styled-components/native';
import RawText from 'src/components/text/RawText';
import colors from 'src/utils/color';

interface Props {
  containerWidth: string;
  containerHeight: string;
  title: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled(RawText).attrs({
  fontFamily: 'ProximaNova-Bold',
  fontStyle: 'nomal',
  fontSize: '40px',
  lineHeight: '40px',
  color: colors.black
})``;

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
      <Title>{title}</Title>
    </Container>
  );
};

export default Board;
