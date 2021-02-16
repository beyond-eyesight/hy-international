import styled from 'styled-components/native';
import React, { useState } from 'react';
import Board from 'src/components/board/Board';
import TextButton from 'src/components/button/TextButton';
import { push } from 'src/utils/navigator';
import colors from 'src/utils/color';
import { SCREEN_IDS } from 'src/components/screens/constant';
import Percentage from 'src/layout/size/percentage';
import {
  getRunningModelHeight,
  getRunningModelWidth
} from 'src/layout/device/model/deviceModel';
import DefaultText from 'src/components/text/DefaultText';
import Pixel from 'src/layout/size/pixel';
import RNTextInput from 'src/components/input/RNTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import DefaultTextInput from 'src/components/text/DefaultTextInput';

const Container = styled.View`
  height: ${getRunningModelHeight().multiply(new Percentage(100)).toString};
  background: ${colors.white};
  align-items: center;
  width: ${getRunningModelWidth().multiply(new Percentage(90)).toString};
`;

const NoticeContainer = styled.View`
  width: ${getRunningModelWidth().multiply(new Percentage(90)).toString};
  align-items: center;
  margin-top: ${getRunningModelHeight().multiply(new Percentage(5)).toString};
  margin-bottom: ${getRunningModelHeight().multiply(new Percentage(10))
    .toString};
`;

interface Props {
  componentId: string;
}

const AtSignView = styled.View`
  height: 100%
  width: 10%
  background-color: ${colors.blue_signiture};
  align-items: center;
  justify-content: center;
`;

const EmailContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
`;

const DefaultTextInputContainer = styled.View`
  align-items: center;
  text-align: center;
`;

const SignInSection: React.FC<Props> = ({ componentId }: Props) => {
  const placeholderSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(2)
  );
  const textSize: Pixel = getRunningModelHeight().multiply(new Percentage(3));
  const titleSize: Pixel = getRunningModelHeight().multiply(
    new Percentage(2.5)
  );
  let controller;
  const bodySize: Pixel = getRunningModelHeight().multiply(new Percentage(1.9));
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  return (
    <Container>
      <Board containerWidth="100%" containerHeight="10%" title="Sign In" />
      <DefaultTextInput
        fontFamily="ProximaNova-Regular"
        fontStyle="normal"
        fontSize={placeholderSize.toString()}
        lineHeight={placeholderSize.toString()}
        color={colors.black}
        placeholder="placeholder"
        placeholderTextColor={colors.gray500}
      />
      <EmailContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '5%',
          marginBottom: '3%'
        }}
      >
        <RNTextInput
          borderTopLeftRadius={10}
          borderBottomLeftRadius={10}
          placeHolder=" Email ID"
          placeholderTextColor={colors.gray500}
          containerWidth="50%"
          containerHeight="100%"
        />
        <AtSignView>
          <DefaultText
            fontFamily="ProximaNova-Regular"
            fontStyle="normal"
            fontSize={textSize.toString()}
            lineHeight={textSize.toString()}
            color={colors.white}
          >
            @
          </DefaultText>
        </AtSignView>
        <DropDownPicker
          items={[
            {
              label: 'hanyang.ac.kr',
              value: 'hanyang.ac.kr'
            },
            {
              label: 'hmail.hanyang.ac.kr',
              value: 'hmail.hanyang.ac.kr'
            }
          ]}
          controller={(instance) => {
            controller = instance;
          }}
          containerStyle={{
            width: '40%',
            height: '100%',
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0
          }}
          labelStyle={{
            fontSize: 12
          }}
          style={{
            backgroundColor: colors.gray20,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10
          }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: colors.gray20 }}
          onChangeList={(items, callback) => {
            new Promise((resolve, reject) => resolve(setItems(items)))
              .then(() => callback())
              .catch(() => {});
          }}
          defaultValue="hanyang.ac.kr"
          onChangeItem={(item) => setValue(item.value)}
        />
      </EmailContainer>
      <DefaultTextInputContainer
        style={{
          width: '100%',
          height: '6%',
          marginTop: '1%',
          marginBottom: '3%'
        }}
      >
        <RNTextInput
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}
          placeHolder=" Password"
          placeholderTextColor={colors.gray500}
          textAlign="auto"
        />
      </DefaultTextInputContainer>
      <NoticeContainer>
        <DefaultText
          fontFamily="ProximaNova-Bold"
          fontStyle="normal"
          fontSize={titleSize.toString()}
          lineHeight={titleSize.toString()}
          color={colors.black}
        >
          Notice!
        </DefaultText>
        <DefaultText
          fontFamily="ProximaNova-Regular"
          fontStyle="normal"
          fontSize={bodySize.toString()}
          lineHeight={bodySize.toString()}
          color={colors.black}
        >
          Only hanyang e-mail can be used. Although you already registered in
          Hanyang Portal, you should sign up cause this app is another system.
        </DefaultText>
      </NoticeContainer>
      <TextButton
        width="100%"
        height="6%"
        content="Sign In"
        ellipticalColor={colors.blue_signiture}
        textColor={colors.white}
        borderRadius="100px"
        onPress={async () => {
          await push({
            currentComponentId: componentId,
            nextComponentName: SCREEN_IDS.ZoneScreen
          });
        }}
      />
    </Container>
  );
};

export default SignInSection;
