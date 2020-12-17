import { FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import ChatRoom from 'src/model/chatRoom';
import styled from 'styled-components/native';
import colors from 'src/styles/color';
import RNText from 'src/components/text/RNText';

const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background: ${colors.white};
  width: 100%;
`;

const List = styled(FlatList as new () => FlatList<ChatRoom>)`
  height: 100%;
`;

const StyledItem = styled.View`
  background-color: ${colors.blue_signiture};
  padding-vertical: 5%;
  margin-vertical: 5%;
`;

const ZoneName = styled(RNText).attrs({
  fontType: 'REGULAR',
  textColor: colors.white
})``;

interface Props {
  chatRooms: ChatRoom[];
}

const InfiniteList: React.FC<Props> = ({ chatRooms }: Props) => {
  const renderItem: ListRenderItem<ChatRoom> = (info) => {
    console.log('haha');
    console.log(info);
    return (
      <StyledItem>
        <ZoneName>{info.item.name.toString()}</ZoneName>
      </StyledItem>
    );
  };

  return (
    <Container>
      <List
        data={chatRooms}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
};

export default InfiniteList;
