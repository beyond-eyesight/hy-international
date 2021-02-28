import React from 'react';
import Topbar from 'src/components/topbar/Topbar';
import Percentage from 'src/draw/size/percentage';
import Pixel from 'src/draw/size/pixel';
import { getRunningModelWidth } from 'src/draw/device/model/deviceModel';
import { pop, push } from 'src/navigation/navigation';

export type Props = {
  componentId: string;
  title?: string;
};

const BackTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  componentId,
  title
}: Props) => {
  const length: Pixel = getRunningModelWidth().multiply(new Percentage(8));

  const backButtonHeight: Pixel = getRunningModelWidth().multiply(
    new Percentage(4.8)
  );
  return <Topbar title={title} />;
};
export default BackTopbar;
