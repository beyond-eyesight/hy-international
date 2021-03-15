import React from 'react';
import ZoneSection from 'src/components/section/ZoneSection';
import { View } from 'react-native';
import TopHeader from '../section/TopHeader';

interface Props {
  componentId: string;
}

const ZoneScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <TopHeader />
      <ZoneSection componentId={componentId} />
    </View>
  );
};

export default ZoneScreen;
