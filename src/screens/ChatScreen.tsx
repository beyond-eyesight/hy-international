import React from 'react';
import styled from 'styled-components/native';
import ContainerWithStatusBar from 'src/components/container/ContainerWithStatusBar';
import colors from 'src/styles/color';
import BackTopbar from 'src/components/topbar/BackTopbar';
import ChatSection from 'src/components/section/ChatSection';
import ChatRoom from 'src/model/chatRoom';

const Container = styled(ContainerWithStatusBar)`
  background-color: ${colors.milkWhite};
`;

interface Props {
  componentId: string;
  chatRoom: ChatRoom;
}

const ChatScreen: React.FC<Props> = ({ componentId, chatRoom }: Props) => {
  return (
    <Container statusBarColor={colors.blue_signiture}>
      <BackTopbar componentId={componentId} />
      <ChatSection chatRoom={chatRoom} />
    </Container>
  );
};

export default ChatScreen;
