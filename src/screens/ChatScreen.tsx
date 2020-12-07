import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import colors from 'src/styles/color';
import BackTopbar from 'src/components/topbar/BackTopbar';
import ChatSection from 'src/components/section/ChatSection';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
`;

interface Props {
  componentId: string;
}

const ChatScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <ChatSection />
    </Container>
  );
};

export default ChatScreen;
