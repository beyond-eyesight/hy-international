import React, { useState } from 'react';
import Zone from 'src/model/zone';
import Pixel from 'src/draw/size/pixel';
import Percentage from 'src/draw/size/percentage';
import { StyleSheet, View } from 'react-native';
import runningDeviceModel from '../../draw/device/model/deviceModel';
import InformationBoard from '../board/InformationBoard';
import { TextInputBoxStyle } from '../box/TextInputBox';

export type Props = {
  componentId: string;
};

const deviceModelHeight: Pixel = runningDeviceModel._height;
const deviceModelWidth: Pixel = runningDeviceModel._width;

const textSize: Pixel = deviceModelHeight.multiply(new Percentage(2.5));

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const [chatRooms, setChatRooms] = useState<Zone[]>();

  return (
    <View>
      <TitleBoard />
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
