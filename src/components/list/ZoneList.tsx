import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';
import ChatRoom from 'src/model/chatRoom';
import styled from 'styled-components/native';
import colors from 'src/styles/color';
import TextButton from 'src/components/button/TextButton';
import RNText from 'src/components/text/RNText';

const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background: ${colors.white};
  width: 100%;
`;

const List = styled(FlatList as new () => FlatList<ChatRoom>)``;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray300};
`;

const Zone = styled.View`
  flex-direction: row;
  height: 100%;
  align-items: center;
`;

const TextContainer = styled.View`
  flex: 3;
`;

const ZoneName = styled(RNText).attrs({
  fontType: 'BOLD'
})`
  font-size: 22px;
`;

const ZoneExplanation = styled(RNText).attrs({
  fontType: 'REGULAR'
})`
  font-size: 17px;
`;

const JoinButton = styled(TextButton).attrs({
  width: '20%',
  height: '70%',
  content: 'Join',
  ellipticalColor: colors.blue_signiture,
  textColor: colors.white,
  borderRadius: '100px'
})`
  flex: 1;
`;

interface Props {
  chatRooms: ChatRoom[];
}

const ZoneList: React.FC<Props> = ({ chatRooms }: Props) => {
  const renderItem: ListRenderItem<ChatRoom> = (info) => {
    return (
      <Zone>
        <TextContainer>
          <ZoneName>{info.item.name.toString()}</ZoneName>
          <ZoneExplanation>? people are talking</ZoneExplanation>
        </TextContainer>
        <JoinButton />
      </Zone>
    );
  };

  return (
    <Container>
      <List
        data={chatRooms}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ height: '10%' }}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

export default ZoneList;
