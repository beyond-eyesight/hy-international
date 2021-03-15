import React from 'react';
import ZoneSection from 'src/components/section/ZoneSection';
import { View } from 'react-native';
import Header from '../section/Header';

interface Props {
  componentId: string;
}

const ZoneScreen: React.FC<Props> = ({ componentId }: Props) => {
  return (
    <View>
      <Header />
      <ZoneSection componentId={componentId} />
    </View>
  );
};

export default ZoneScreen;
