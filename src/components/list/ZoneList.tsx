import { FlatList, ListRenderItem, View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import TextButton from 'src/components/button/TextButton';
import Zone from 'src/model/zone';
import { SCREEN_IDS } from 'src/components/screens/constant';
import colors from 'src/utils/color';
import RawText from 'src/components/text/RawText';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { push } from 'src/navigation/navigation';

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
  zones?: Zone[];
}

const join = async (componentId: string, zone: Zone) => {
  // todo: validation logic(위치값을 보내고, 들어갈 수 있는지 확인하는 로직)
  await push({
    currentComponentId: componentId,
    nextComponentName: SCREEN_IDS.ChatScreen,
    params: {
      zone
    }
  });
};

const ZoneList: React.FC<Props> = ({ componentId, zones }: Props) => {
  const zoneNameSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(2.5)
  );
  const zoneExplanationSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(1.9)
  );
  const renderItem: ListRenderItem<Zone> = (info) => {
    return (
      <ZoneView>
        <TextContainer>
          <RawText
            fontFamily="ProximaNova-Regular"
            fontStyle="normal"
            fontSize={zoneNameSize.toString()}
            lineHeight={zoneNameSize.toString()}
            color={colors.white}
          >
            {info.item.name.toString()}
          </RawText>
          <RawText
            fontFamily="ProximaNova-Regular"
            fontStyle="normal"
            fontSize={zoneExplanationSize.toString()}
            lineHeight={zoneExplanationSize.toString()}
            color={colors.white}
          >
            ? people are talking
          </RawText>
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
        data={zones}
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
