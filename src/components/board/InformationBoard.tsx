import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import TextBox from 'src/components/box/TextBox';
import { TextInputBoxStyle } from 'src/components/box/TextInputBox';

interface Props {
  title?: string;
  children?: ReactNode;
  titleStyles: TextInputBoxStyle;
  bodyStyles: TextInputBoxStyle;
}

const InformationBoard: React.FC<Props> = ({
  title,
  children,
  titleStyles,
  bodyStyles
}: Props) => {
  return (
    <View>
      {title !== undefined && (
        <TextBox
          boxStyle={titleStyles.boxStyle}
          textStyle={titleStyles.contentStyle}
        >
          {title}
        </TextBox>
      )}

      {children !== undefined && (
        <TextBox
          boxStyle={bodyStyles.boxStyle}
          textStyle={bodyStyles.contentStyle}
        >
          {children}
        </TextBox>
      )}
    </View>
  );
};

export default InformationBoard;
