import React from 'react';
import styled from 'styled-components/native';
import RNText from 'src/components/text/RNText';
import colors from 'src/utils/color';

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

const Content = styled(RNText).attrs({
  fontType: 'BOLD',
  textColor: colors.white
})`
  font-size: 25px;
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
      <Content textColor={textColor}>{content}</Content>
    </Elliptical>
  );
};

export default TextButton;
