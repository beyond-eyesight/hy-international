import React from 'react';
import styled from 'styled-components/native';
import Dash from 'react-native-dash';
import TextButton from 'src/components/button/TextButton';
import colors from 'src/utils/color';
import DefaultText from 'src/components/text/DefaultText';
import Pixel from 'src/layout/size/pixel';
import { getRunningModelHeight } from 'src/layout/device/model/deviceModel';
import Percentage from 'src/layout/size/percentage';

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
  border-bottom-color: ${colors.red200};
  border-bottom-width: 10;
`;

const SendEmailButton = styled(TextButton).attrs({
  width: '35%',
  // todo: 픽셀로 바꾸
  height: '90%',
  content: 'Send',
  ellipticalColor: colors.blue_signiture,
  textColor: colors.white,
  borderRadius: '100px'
})``;

const VerifyEmailBox: React.FC = () => {
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
  return (
    <Container>
      <TitleContainer style={{ borderStyle: 'dashed' }}>
        <DefaultText
          fontFamily="ProximaNova-Regular"
          fontStyle="normal"
          fontSize={textSize.toString()}
          lineHeight={textSize.toString()}
          color="black"
        >
          abcdefg
        </DefaultText>
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
