import styled from 'styled-components/native';
import React from 'react';
import colors from '../../styles/color';
import DefaultButton from '../button/DefaultButton';
import DefaultTextInput from '../input/DefaultTextInput';
import EmailInput from '../input/EmailInput';
import Board from '../board/Board';
import RNText from '../text/RNText';

const Container = styled.View`
  height: 100%;
  background: ${colors.white};
  align-items: center;
  width: 90%;
`;

const NoticeContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
`;

const Title = styled(RNText).attrs({
  fontType: 'BOLD'
})`
  font-size: 22px;
`;

const NormalText = styled(RNText).attrs({
  fontType: 'REGULAR'
})`
  font-size: 17px;
`;

const ImportantText = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.red500
})`
  font-size: 17px;
`;

const SignInSection: React.FC = () => {
  return (
    <Container>
      <Board containerWidth="100%" containerHeight="10%" title="Sign In" />
      <EmailInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="5%"
        marginBottom="3%"
      />
      <DefaultTextInput
        containerWidth="100%"
        containerHeight="6%"
        marginTop="1%"
        marginBottom="3%"
        placeholder=" Password"
      />
      <NoticeContainer>
        <Title>Notice!</Title>
        <NormalText>
          Only hanyang e-mail can be used.{' '}
          <ImportantText>
            Although you already registered in Hanyang Portal, you should sign
            up
          </ImportantText>{' '}
          cause this app is another system.
        </NormalText>
      </NoticeContainer>
      <DefaultButton
        containerWidth="100%"
        containerHeight="6%"
        content="Sign In"
        ellipticalColor={colors.blue_signiture}
        textColor={colors.white}
      />
    </Container>
  );
};

export default SignInSection;
