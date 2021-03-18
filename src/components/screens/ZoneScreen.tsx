import React from 'react';
import ZoneSection from 'src/components/section/ZoneSection';
import { View } from 'react-native';
import TopSection from 'src/components/section/TopSection';

interface Props {
  componentId: string;
}

const ZoneScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <TopSection componentId={componentId} />
      <ZoneSection componentId={componentId} />
    </View>
  );
};

export default ZoneScreen;
