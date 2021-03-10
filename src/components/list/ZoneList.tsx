import { ListRenderItem, StyleSheet, View } from 'react-native';
import React from 'react';
import Zone from 'src/model/zone';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Pixel from 'src/draw/size/pixel';
import { runningDeviceModel } from 'src/draw/device/model/deviceModel';
import Percentage from 'src/draw/size/percentage';
import { push } from 'src/navigation/navigation';
import { blue, white } from 'src/draw/color';
import { TextBoxStyleProps } from 'src/components/box/TextBox';

interface Props {
  componentId: string;
  zones?: Zone[];
}

const deviceModelHeight: Pixel = runningDeviceModel._height;

const zoneNameSize: Pixel = deviceModelHeight.multiply(new Percentage(2.5));
const zoneExplanationSize: Pixel = deviceModelHeight.multiply(
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
    return <View />;
  };

  return <View />;
};

export default ZoneList;
