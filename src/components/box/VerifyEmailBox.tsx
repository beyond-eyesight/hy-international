import React from 'react';
import styled from 'styled-components/native';
import Dash from 'react-native-dash';
import colors from 'styles/color';
import TextButton from 'components/button/TextButton';
import RNText from 'components/text/RNText';

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
const Title = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.black
})`
  font-size: 25px;
`;

const SendEmailButton = styled(TextButton).attrs({
  containerWidth: '35%',
  // todo: 픽셀로 바꾸
  containerHeight: '90%',
  content: 'Send',
  ellipticalColor: colors.blue_signiture,
  textColor: colors.white,
  borderRadius: '100px'
})``;

const VerifyEmailBox: React.FC = () => {
  return (
    <Container>
      <TitleContainer style={{ borderStyle: 'dashed' }}>
        <Title>Verify Your Email</Title>
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
