import React, { useState } from 'react';
import Zone from 'src/model/zone';
import Pixel from 'src/draw/size/pixel';
import Percentage from 'src/draw/size/percentage';
import { View } from 'react-native';
import runningDeviceModel from '../../draw/device/model/deviceModel';

export type Props = {
  componentId: string;
};

const deviceModelHeight: Pixel = runningDeviceModel._height;

const textSize: Pixel = deviceModelHeight.multiply(new Percentage(2.5));

const ZoneSection: React.FC<Props> = ({ componentId }: Props) => {
  const [chatRooms, setChatRooms] = useState<Zone[]>();
  return (
    <View>
    </View>
  );
};

export default ZoneSection;
