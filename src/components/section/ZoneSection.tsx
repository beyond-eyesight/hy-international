import React from 'react';
import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';
import Board from 'src/components/board/Board';
import TextButton from 'src/components/button/TextButton';
import colors from 'src/styles/color';
import { push } from 'src/utils/navigator';
import { SCREEN_IDS } from 'src/screens/constant';

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
  margin-bottom: 10%;
`;

const Explanation = styled(RNText).attrs({
  fontType: 'REGULAR'
})`
  font-size: 22px;
`;

const ChatRoomContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
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
      <ChatRoomContainer>
        <TextButton
          containerWidth="100%"
          containerHeight="6%"
          content="Wangsimni"
          ellipticalColor={colors.blue_signiture}
          textColor={colors.white}
          borderRadius="50px"
          onPress={async () => {
            await push({
              currentComponentId: componentId,
              nextComponentName: SCREEN_IDS.ChatScreen
            });
          }}
        />
      </ChatRoomContainer>
    </Container>
  );
};

export default ZoneSection;
