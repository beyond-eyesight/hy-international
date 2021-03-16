import React, { useCallback, useContext, useEffect, useState } from 'react';
import { GiftedChat, IMessage, InputToolbar } from 'react-native-gifted-chat';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { IconButton } from 'react-native-paper';
import Percentage from 'src/draw/size/percentage';
import Pixel from 'src/draw/size/pixel';
import runningDeviceModel from 'src/draw/device/model/deviceModel';
import TextInputBox, {
  TextInputBoxStyle
} from 'src/components/box/TextInputBox';
import { IMessage as StompMessage } from '@stomp/stompjs/esm6/i-message';
import ApplicationContext from '../../context/applicationContext';
import ChatMessageDto from '../../dto/chatMessageDto';
import Zone from '../../model/zone';
import ChatMessage from '../../model/chatMessage';
import { HEADER_HEIGHT } from '../../draw/size/value';

const deviceWidth: Pixel = runningDeviceModel._width;
const deviceHeight: Pixel = runningDeviceModel._height;

// todo: userId 하드코딩 제거, 칼라 및 size 등 하드코딩 제거

const INPUT_BAR_HEIGHT = runningDeviceModel.getHeightOf(new Percentage(7));

function getMessageContainerHeight() {
  return runningDeviceModel
    .getHeightOf(new Percentage(100))
    .minus(HEADER_HEIGHT)
    .minus(runningDeviceModel.getCenterSectionPaddingBottom())
    .minus(INPUT_BAR_HEIGHT).value;
}

const ChatSection: React.FC<{ zone: Zone }> = (props: { zone: Zone }) => {
  const { zone } = props;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [bottom, setBottom] = useState<Pixel>(
    runningDeviceModel.getBottomNavigationBarHeight()
  );

  const { chatApi } = useContext(ApplicationContext);

  const bottomOnKeyboardDidShow = runningDeviceModel.getBottomOnKeyboardDidShow();
  const bottomOnKeyboardDidHide = runningDeviceModel.getBottomOnKeyboardDidHide();

  const messageContainerHeightOnKeyboardDidShow =
    getMessageContainerHeight() - 282;

  const [messageContainerHeight, setMessageContainerHeight] = useState<number>(
    getMessageContainerHeight()
  );
  useEffect(() => {
    chatApi.joinRoom(zone.id, (message: StompMessage) => {
      const chatMessageDto: ChatMessageDto = JSON.parse(message.body);
      renderMessageOfOthers(chatMessageDto, setMessages);
    });

    Keyboard.addListener('keyboardDidShow', (event) => {
      console.log('keyboardDidShow');
      console.log(bottomOnKeyboardDidShow);
      console.log(event.endCoordinates.height);
      setBottom(new Pixel(event.endCoordinates.height + 72));
      setMessageContainerHeight(messageContainerHeightOnKeyboardDidShow);
    });
    Keyboard.addListener('keyboardDidHide', (e) => {
      console.log('kkkkkkk');
      console.log('keyboardDidHide');
      console.log(e);
      setBottom(bottomOnKeyboardDidHide);
    });

    // return () => {
    //   chatApi.leaveRoom(zone.id);
    // };
  }, [
    chatApi,
    zone,
    bottom,
    bottomOnKeyboardDidShow,
    bottomOnKeyboardDidHide,
    messageContainerHeightOnKeyboardDidShow
  ]);

  const onSend = useCallback(
    (newMessages: IMessage[]) => {
      function sendMessages(newMessages: IMessage[]) {
        newMessages.forEach((newMessage) => {
          chatApi.sendMessage(zone.id, ChatMessageDto.fromMessage(newMessage));
        });
      }
      sendMessages(newMessages);
      renderMessages(setMessages, newMessages);
    },
    [chatApi, zone.id]
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <GiftedChat
        messages={messages}
        renderActions={(props) => null}
        renderInputToolbar={(props) => (
          <InputBar
            bottom={bottom}
            onPressIconButton={() => onSend(messages)}
          />
        )}
        listViewProps={{
          style: {
            height: messageContainerHeight,
            backgroundColor: 'blue',
            overflow: 'hidden',
            flexGrow: 0
          },
          contentContainerStyle: {
            width: 400,
            height: 100,
            backgroundColor: 'yellow'
          }
        }}
        user={{
          // todo: remove hard coding
          _id: '1'
        }}
      />
    </View>
  );
};
// {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}

const InputBar: React.FC<{
  bottom: Pixel;
  onPressIconButton: () => void;
}> = (props: { bottom: Pixel; onPressIconButton: () => void }) => {
  const { bottom, onPressIconButton } = props;

  const containerStyles = StyleSheet.create({
    container: {
      height: INPUT_BAR_HEIGHT.value,
      backgroundColor: 'red',
      borderTopWidth: 0,
      borderWidth: 0,
      bottom: bottom.value
    }
  });

  return (
    <InputToolbar
      renderActions={() => null}
      containerStyle={containerStyles.container}
      renderComposer={(props) => (
        <Composer onPressIconButton={onPressIconButton} />
      )}
      primaryStyle={{}}
    />
  );
};

const Composer: React.FC<{
  onPressIconButton: () => void;
}> = (props: { onPressIconButton: () => void }) => {
  const { onPressIconButton } = props;
  const containerStyle = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between'
    }
  });
  const inputStyles = StyleSheet.create<TextInputBoxStyle>({
    boxStyle: {
      borderColor: 'transparent',
      height: INPUT_BAR_HEIGHT.value,
      borderWidth: new Pixel(1).value,
      overflow: 'hidden'
    },
    contentStyle: {
      width: deviceWidth.multiply(new Percentage(80)).value,
      height: INPUT_BAR_HEIGHT.value,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      overflow: 'hidden'
    }
  });

  return (
    <View style={containerStyle.container}>
      <TextInputBox
        textInputBoxStyle={{
          boxStyle: inputStyles.boxStyle,
          contentStyle: inputStyles.contentStyle
        }}
        placeholder="Type Herekkk..."
        placeholderTextColor="black"
      />
      <IconButton
        icon="send"
        color="blue"
        size={deviceWidth.multiply(new Percentage(6)).value}
        onPress={onPressIconButton}
        style={{
          alignSelf: 'center'
        }}
      />
    </View>
  );
};

function renderMessages(
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void,
  newMessages: IMessage[]
) {
  setMessages((previousMessages) =>
    GiftedChat.append(previousMessages, newMessages)
  );
}

function renderMessageOfOthers(
  chatMessageDto: ChatMessageDto,
  setMessages: (
    value: ((prevState: IMessage[]) => IMessage[]) | IMessage[]
  ) => void
) {
  const chatMessage: ChatMessage = ChatMessage.fromDto(chatMessageDto);
  if (chatMessage.isOwn('1')) {
    return;
  }
  renderMessages(setMessages, [chatMessage]);
}

export default ChatSection;
