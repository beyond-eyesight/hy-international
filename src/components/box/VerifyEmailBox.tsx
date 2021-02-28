import React from 'react';
import styled from 'styled-components/native';
import Dash from 'react-native-dash';
import TextButton from 'src/components/button/TextButton';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { blue, red, white } from 'src/draw/color';

const Container = styled.View`
  width: 100%;
  height: 6%;
  align-items: center;
  margin-bottom: 2%;
`;

const TitleContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom-color: ${red.get('200')};
  border-bottom-width: 10;
`;

const SendEmailButton = styled(TextButton).attrs({
  width: '35%',
  // todo: 픽셀로 바꾸
  height: '90%',
  content: 'Send',
  ellipticalColor: blue.get('600'),
  textColor: white,
  borderRadius: '100px'
})``;

const VerifyEmailBox: React.FC = () => {
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
  return (
    <Container>
      <TitleContainer style={{ borderStyle: 'dashed' }}>
        <SendEmailButton />
      </TitleContainer>
      <Dash
        style={{ width: '90%', height: 1, flexDirection: 'row' }}
        dashGap={2}
        dashLength={3}
        dashThickness={2}
      />
    </Container>
  );
};

export default VerifyEmailBox;
