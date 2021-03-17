import React, { useState } from 'react';
import Zone from 'src/model/zone';
import Pixel from 'src/draw/size/pixel';
import Percentage from 'src/draw/size/percentage';
import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-paper';
import InformationBoard from '../board/InformationBoard';
import { TextInputBoxStyle } from '../box/TextInputBox';
import RunningMobileDevice from '../../draw/device/model/runningMobileDevice';

export type Props = {
  componentId: string;
};

const deviceModelHeight: Pixel = RunningMobileDevice.getHeightOf(
  new Percentage(100)
);
const deviceModelWidth: Pixel = RunningMobileDevice.getWidthOf(
  new Percentage(100)
);

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const [zones, setZones] = useState<Zone[]>([
    Zone.of('26dd9c66-0507-4469-8c5e-791834074732', 'Wangsimni', 0, true)
  ]);

  return (
    <View>
      <TitleBoard />
      <ZoneList zones={zones} />
      <RemarkBoard />
    </View>
  );
};

function getColorOf(zone: Zone): string {
  return zone.isOpen ? 'blue' : 'red';
}

const RemarkBoard: React.FC = () => {
  const remarkStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: deviceModelHeight.multiply(new Percentage(5)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: deviceModelHeight.multiply(new Percentage(3)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: deviceModelHeight.multiply(new Percentage(2.5)).value,
      lineHeight: deviceModelHeight.multiply(new Percentage(2.5)).value,
      color: 'black'
    }
  });
  return (
    <InformationBoard
      titleStyles={StyleSheet.create<TextInputBoxStyle>({
        boxStyle: {},
        contentStyle: {}
      })}
      bodyStyles={remarkStyles}
    >
      You can join the zone when you are at near the location
    </InformationBoard>
  );
};

const ZoneList: React.FC<{ zones: Zone[] }> = (props: { zones: Zone[] }) => {
  const { zones } = props;
  return (
    <View>
      {zones.map((zone, key) => {
        return (
          <List.Item
            key={parseInt('radix', key)}
            title={zone.name.toString()}
            description={`${zone.count.toString()} people are chatting`}
            left={(props) => (
              <List.Icon
                {...props}
                color={getColorOf(zone)}
                icon="circle-slice-8"
              />
            )}
          />
        );
      })}
    </View>
  );
};

const TitleBoard: React.FC = () => {
  const titleStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: deviceModelWidth.multiply(new Percentage(90)).value,
      height: deviceModelHeight.multiply(new Percentage(4)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: deviceModelHeight.multiply(new Percentage(5)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Bold',
      fontSize: deviceModelHeight.multiply(new Percentage(4)).value,
      lineHeight: deviceModelHeight.multiply(new Percentage(4)).value,
      color: 'black'
    }
  });

  return (
    <InformationBoard
      title="Endter the zone"
      titleStyles={titleStyles}
      bodyStyles={StyleSheet.create<TextInputBoxStyle>({
        boxStyle: {},
        contentStyle: {}
      })}
    />
  );
};

export default ZoneSection;
