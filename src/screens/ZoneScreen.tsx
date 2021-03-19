import React from 'react';
import { View } from 'react-native';
import DefaultTopBar from 'src/components/bar/Topbar';
import ZoneSection from 'src/screens/sections/ZoneSection';

interface Props {
  componentId: string;
}

const ZoneScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <DefaultTopBar componentId={componentId} />
      <ZoneSection componentId={componentId} />
    </View>
  );
};

export default ZoneScreen;
