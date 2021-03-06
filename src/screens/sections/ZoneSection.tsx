import React, { useContext, useEffect, useState } from 'react';
import Zone from 'src/model/zone';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Button, List } from 'react-native-paper';
import ApplicationContext from 'src/context/applicationContext';
import { SCREEN_IDS } from 'src/screens/constant';
import Percentage from 'graphic/size/percentage';
import {
  screenHeight,
  screenWidth
} from 'graphic/device/model/runningMobileDevice';
import { TextInputBoxStyle } from 'src/screens/sections/components/box/TextInputBox';
import InformationBoard from 'src/screens/sections/components/board/InformationBoard';
import { moveScreen } from 'src/screens/navigation/navigation';

export type Props = {
  componentId: string;
};

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const { zoneApi } = useContext(ApplicationContext);
  const [zones, setZones] = useState<Zone[]>([]);

  useEffect(() => {
    zoneApi.getZones().then((response: Zone[]) => {
      setZones(response);
    });
  }, [zoneApi]);

  return (
    <View>
      <TitleBoard />
      <ZoneList componentId={componentId} zones={zones} />
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
      width: screenWidth.multiply(new Percentage(90)).value,
      height: screenHeight.multiply(new Percentage(5)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: screenHeight.multiply(new Percentage(3)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Regular',
      fontSize: screenHeight.multiply(new Percentage(2.5)).value,
      lineHeight: screenHeight.multiply(new Percentage(2.5)).value,
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

const ZoneList: React.FC<{ componentId: string; zones: Zone[] }> = (props: {
  componentId: string;
  zones: Zone[];
}) => {
  const { componentId, zones } = props;
  return (
    <View>
      {zones.map((zone, key) => {
        return (
          <List.Item
            key={zone.id.toString()}
            title={zone.name.toString()}
            description={`${zone.count.toString()} people are chatting`}
            left={(props) => (
              <List.Icon
                {...props}
                color={getColorOf(zone)}
                icon="circle-slice-8"
              />
            )}
            right={() => (
              <Button
                mode="contained"
                onPress={async () => {
                  await moveScreen({
                    currentComponentId: componentId,
                    nextComponentName: SCREEN_IDS.ChatScreen
                  });
                }}
                style={joinButtonStyle.container}
              >
                JOIN
              </Button>
            )}
          />
        );
      })}
    </View>
  );
};

const joinButtonStyle = StyleSheet.create<{
  container: ViewStyle;
  content: ViewStyle;
  label: ViewStyle;
}>({
  container: {
    alignSelf: 'center'
  },
  content: {},
  label: {}
});

const TitleBoard: React.FC = () => {
  const titleStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      width: screenWidth.multiply(new Percentage(90)).value,
      height: screenHeight.multiply(new Percentage(4)).value,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: screenHeight.multiply(new Percentage(5)).value
    },
    contentStyle: {
      fontFamily: 'ProximaNova-Bold',
      fontSize: screenHeight.multiply(new Percentage(4)).value,
      lineHeight: screenHeight.multiply(new Percentage(4)).value,
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
