import React from 'react';
import { View } from 'react-native';
import ZoneSection from 'src/screens/sections/ZoneSection';
import DefaultTopBar from 'src/screens/sections/components/bar/Topbar';

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
