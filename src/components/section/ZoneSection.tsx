import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Board from 'src/components/board/Board';
import ZoneList from 'src/components/list/ZoneList';
import Zone from 'src/model/zone';
import ApplicationContext from 'src/context/applicationContext';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import TextInputBox from 'src/components/box/TextInputBox';
import { blue, grey, white } from 'src/draw/color';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';
import { StyleSheet } from 'react-native';

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

const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(2.5));

const textBoxProps = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: textSize.value,
    lineHeight: textSize.value,
    color: white
  }
});

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const [chatRooms, setChatRooms] = useState<Zone[]>();
  const { zoneApi } = useContext(ApplicationContext);

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
        <TextBox
          boxStyle={textBoxProps.boxStyle}
          textStyle={textBoxProps.textStyle}
        >
          you can join chat room when you are near the location
        </TextBox>
      </ExplanationContainer>
      <ZoneList componentId={componentId} zones={chatRooms} />
    </Container>
  );
};

export default ZoneSection;
