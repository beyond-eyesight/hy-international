import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import TextButton from 'src/components/button/TextButton';
import Zone from 'src/model/zone';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelHeight } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { push } from 'src/navigation/navigation';
import { blue, grey, white } from 'src/draw/color';
import TextBox, { TextBoxStyleProps } from 'src/components/box/TextBox';

const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background: ${white};
  width: 100%;
`;

const List = styled(FlatList as new () => FlatList<Zone>)``;

const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${grey.get('300')};
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
  ellipticalColor: blue.get('600'),
  textColor: white,
  borderRadius: '100px'
})`
  flex: 1;
`;

interface Props {
  componentId: string;
  zones?: Zone[];
}

const zoneNameSize: Pixel = getRunningModelHeight().multiply(
  new Percentage(2.5)
);
const zoneExplanationSize: Pixel = getRunningModelHeight().multiply(
  new Percentage(1.9)
);

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

const textBoxProps1 = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: zoneNameSize.value,
    lineHeight: zoneExplanationSize.value,
    color: white
  }
});

const textBoxProps2 = StyleSheet.create<TextBoxStyleProps>({
  boxStyle: {
    height: '100%',
    width: '10%',
    backgroundColor: blue.get('600'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'ProximaNova-Regular',
    fontSize: zoneExplanationSize.value,
    lineHeight: zoneExplanationSize.value,
    color: white
  }
});

const ZoneList: React.FC<Props> = ({ componentId, zones }: Props) => {
  const renderItem: ListRenderItem<Zone> = (info) => {
    return (
      <ZoneView>
        <TextContainer>
          <TextBox
            boxStyle={textBoxProps1.boxStyle}
            textStyle={textBoxProps1.textStyle}
          >
            {info.item.name.toString()}
          </TextBox>
          <TextBox
            boxStyle={textBoxProps2.boxStyle}
            textStyle={textBoxProps2.textStyle}
          >
            ? people are talking
          </TextBox>
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
