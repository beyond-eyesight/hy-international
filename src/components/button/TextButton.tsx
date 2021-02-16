import React from 'react';
import styled from 'styled-components/native';
import colors from 'src/utils/color';
import RawText from 'src/components/text/RawText';
import Pixel from 'src/layout/size/pixel';
import { getRunningModelHeight } from 'src/layout/device/model/deviceModel';
import Percentage from 'src/layout/size/percentage';

interface Props {
  width: string;
  height: string;
  content: string;
  ellipticalColor: string;
  textColor: string;
  borderRadius: string;
  onPress?: () => void;
}

const Elliptical = styled.TouchableOpacity<{
  width: string;
  height: string;
  ellipticalColor: string;
  textColor: string;
  borderRadius: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ ellipticalColor }) => ellipticalColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: none;
  color: ${({ textColor }) => textColor};
  align-items: center;
  justify-content: center;
`;

const TextButton: React.FC<Props> = ({
  width,
  height,
  content,
  ellipticalColor,
  textColor,
  borderRadius,
  onPress = () => {},
  ...props
}: Props) => {
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
  return (
    <Elliptical
      width={width}
      height={height}
      ellipticalColor={ellipticalColor}
      borderRadius={borderRadius}
      textColor={textColor}
      onPress={onPress}
      {...props}
    >
      <RawText
        fontFamily="ProximaNova-Regular"
        fontStyle="normal"
        fontSize={textSize.toString()}
        lineHeight={textSize.toString()}
        color={colors.white}
      >
        {content}
      </RawText>
    </Elliptical>
  );
};

export default TextButton;
