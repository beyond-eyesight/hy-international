import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from '../components/container/ContainerWithStatusBar';
import colors from '../styles/color';
import ChatSection from '../components/section/ChatSection';
import BackTopbar from '../components/topbar/BackTopbar';

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
