import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Board from 'src/components/board/Board';
import ZoneList from 'src/components/list/ZoneList';
import Zone from 'src/model/zone';
import ApplicationContext from 'src/context/applicationContext';
import colors from 'src/utils/color';
import RawText from 'src/components/text/RawText';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import TextInputBox from 'src/components/box/TextInputBox';

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

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const [chatRooms, setChatRooms] = useState<Zone[]>();
  const { zoneApi } = useContext(ApplicationContext);
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(2.5));

  useEffect(() => {
    zoneApi.getZones().then((response) => {
      setChatRooms(response);
    });
  }, [zoneApi]);
  return (
    <Container>
      <TextInputBox />
      <Board
        containerWidth="100%"
        containerHeight="6%"
        title="Enter Chat Zone"
      />
      <ExplanationContainer>
        <RawText
          fontFamily="ProximaNova-Regular"
          fontStyle="normal"
          fontSize={textSize.toString()}
          lineHeight={textSize.toString()}
          color={colors.white}
        >
          you can join chat room when you are near the location
        </RawText>
      </ExplanationContainer>
      <ZoneList componentId={componentId} zones={chatRooms} />
    </Container>
  );
};

export default ZoneSection;
