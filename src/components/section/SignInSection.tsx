import styled from 'styled-components/native';
import React from 'react';
import Board from 'src/components/board/Board';
import EmailInput from 'src/components/input/EmailInput';
import DefaultTextInput from 'src/components/input/DefaultTextInput';
import TextButton from 'src/components/button/TextButton';
import { push } from 'src/utils/navigator';
import colors from 'src/utils/color';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Percentage from 'src/layout/size/percentage';
import {
  getRunningModelHeight,
  getRunningModelWidth
} from 'src/layout/device/model/deviceModel';
import DefaultText from 'src/components/text/DefaultText';
import Pixel from 'src/layout/size/pixel';

const Container = styled.View`
  height: ${getRunningModelHeight().multiply(new Percentage(100)).toString};
  background: ${colors.white};
  align-items: center;
  width: ${getRunningModelWidth().multiply(new Percentage(90)).toString};
`;

const NoticeContainer = styled.View`
  width: ${getRunningModelWidth().multiply(new Percentage(90)).toString};
  align-items: center;
  margin-top: ${getRunningModelHeight().multiply(new Percentage(5)).toString};
  margin-bottom: ${getRunningModelHeight().multiply(new Percentage(10))
    .toString};
`;

interface Props {
  componentId: string;
}

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const titleSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(2.5)
  );
  const bodySize: Pixel = getRunningModelHeight().multiply(new Percentage(1.9));
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
        <DefaultText
          fontFamily="ProximaNova-Bold"
          fontStyle="normal"
          fontSize={titleSize.toString()}
          lineHeight={titleSize.toString()}
          color={colors.black}
        >
          Notice!
        </DefaultText>
        <DefaultText
          fontFamily="ProximaNova-Regular"
          fontStyle="normal"
          fontSize={bodySize.toString()}
          lineHeight={bodySize.toString()}
          color={colors.black}
        >
          Only hanyang e-mail can be used. Although you already registered in
          Hanyang Portal, you should sign up cause this app is another system.
        </DefaultText>
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
