import React, { useContext } from 'react';
import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';
import Board from 'src/components/board/Board';
import ZoneList from 'src/components/list/ZoneList';
import { ApplicationContext } from 'src/context/context';

export type Props = {
  componentId: string;
};

const Container = styled.View`
  height: 100%;
  width: 90%;
`;

const ExplanationContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Explanation = styled(RNText).attrs({
  fontType: 'REGULAR'
})`
  font-size: 22px;
`;

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const { chatRooms } = useContext(ApplicationContext);
  return (
    <Container>
      <Board
        containerWidth="100%"
        containerHeight="6%"
        title="Enter Chat Zone"
      />
      <ExplanationContainer>
        <Explanation>
          you can join chat room when you are near the location
        </Explanation>
      </ExplanationContainer>
      <ZoneList chatRooms={chatRooms} />
    </Container>
  );
};

export default ZoneSection;
