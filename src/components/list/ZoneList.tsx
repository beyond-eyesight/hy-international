import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';
import Zone from 'src/model/zone';
import styled from 'styled-components/native';
import colors from 'src/styles/color';
import TextButton from 'src/components/button/TextButton';
import RNText from 'src/components/text/RNText';
import { push } from 'src/utils/navigator';
import { SCREEN_IDS } from 'src/screens/constant';

const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background: ${colors.white};
  width: 100%;
`;

const List = styled(FlatList as new () => FlatList<Zone>)``;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${colors.gray300};
`;

const ZoneView = styled.View`
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
  componentId: string;
  chatRooms?: Zone[];
}

const join = async (componentId: string, chatRoom: Zone) => {
  // todo: validation logic(위치값을 보내고, 들어갈 수 있는지 확인하는 로직)
  await push({
    currentComponentId: componentId,
    nextComponentName: SCREEN_IDS.ChatScreen,
    params: {
      chatRoom
    }
  });
};

const ZoneList: React.FC<Props> = ({ componentId, chatRooms }: Props) => {
  const renderItem: ListRenderItem<Zone> = (info) => {
    return (
      <ZoneView>
        <TextContainer>
          <ZoneName>{info.item.name.toString()}</ZoneName>
          <ZoneExplanation>? people are talking</ZoneExplanation>
        </TextContainer>
        <JoinButton
          onPress={async () => {
            await join(componentId, info.item);
          }}
        />
      </ZoneView>
    );
  };

  return (
    <Container>
      <List
        data={chatRooms}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        // todo: refac
        contentContainerStyle={{ height: '10%' }}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

export default ZoneList;
