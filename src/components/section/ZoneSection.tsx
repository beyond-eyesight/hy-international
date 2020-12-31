import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';
import Board from 'src/components/board/Board';
import ZoneList from 'src/components/list/ZoneList';
import { ApplicationContext } from 'src/context/context';
import ZoneApi from 'src/api/zoneApi';
import { IProvider } from 'src/context/providers/chatProvider';
import Types from 'src/api/types';
import Zone from 'src/model/zone';

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
  const [chatRooms, setChatRooms] = useState<Zone[]>();
  const { container } = useContext(ApplicationContext);

  useEffect(() => {
    const zoneApi: ZoneApi = container
      .get<IProvider<ZoneApi>>(Types.ZONE)
      .provide();
    zoneApi.getZones().then((response) => {
      setChatRooms(response);
    });
  }, [container]);
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
      <ZoneList componentId={componentId} zones={chatRooms} />
    </Container>
  );
};

export default ZoneSection;
