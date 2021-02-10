import styled from 'styled-components/native';
import React from 'react';
import RNText from 'src/components/text/RNText';
import Board from 'src/components/board/Board';
import EmailInput from 'src/components/input/EmailInput';
import DefaultTextInput from 'src/components/input/DefaultTextInput';
import TextButton from 'src/components/button/TextButton';
import { push } from 'src/utils/navigator';
import colors from 'src/utils/color';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Percentage from 'src/layout/size/percentage';
import translateFromPercentageToPixel from 'src/layout/translator/percentageToPixelTranslator';
import Pixel from 'src/layout/size/pixel';
import runningDeviceModel from 'src/layout/device/model/deviceModel';

const Container = styled.View`
  height: ${translateFromPercentageToPixel(
    new Percentage(100),
    new Pixel(runningDeviceModel._height)
  ).toString};
  background: ${colors.white};
  align-items: center;
  width: ${translateFromPercentageToPixel(
    new Percentage(90),
    new Pixel(runningDeviceModel._width)
  ).toString};
`;

const NoticeContainer = styled.View`
  width: ${translateFromPercentageToPixel(
    new Percentage(100),
    new Pixel(runningDeviceModel._width)
  ).toString};
  align-items: center;
  margin-top: ${translateFromPercentageToPixel(
    new Percentage(5),
    new Pixel(runningDeviceModel._height)
  ).toString};
  margin-bottom: ${translateFromPercentageToPixel(
    new Percentage(10),
    new Pixel(runningDeviceModel._height)
  ).toString};
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

interface Props {
  componentId: string;
}

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container>
      <Board containerWidth="100%" containerHeight="10%" title="Sign In" />
      <EmailInput width="100%" height="6%" marginTop="5%" marginBottom="3%" />
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
          <ImportantText textColor="white">
            Although you already registered in Hanyang Portal, you should sign
            up
          </ImportantText>{' '}
          cause this app is another system.
        </NormalText>
      </NoticeContainer>
      <TextButton
        width="100%"
        height="6%"
        content="Sign In"
        ellipticalColor={colors.blue_signiture}
        textColor={colors.white}
        borderRadius="100px"
        onPress={async () => {
          await push({
            currentComponentId: componentId,
            nextComponentName: SCREEN_IDS.ZoneScreen
          });
        }}
      />
    </Container>
  );
};

export default SignInSection;
