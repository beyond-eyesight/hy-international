import React from 'react';
import Topbar, { Props } from 'components/topbar/Topbar';

const DefaultTopbar: React.FC<Omit<Props, 'iconSource' | 'iconStyle'>> = ({
  title
}: Props) => {
  return <Topbar title={title} justifyContent="center" />;
};

export default DefaultTopbar;
