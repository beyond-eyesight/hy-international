/*
 * 여기 정의한 타입들은 타입스크립트의 'dom' 라이브러리에 있는 것들입니다.
 * 하지만 'dom'은 'react-native'와 함께 쓸 수 없는 것 같습니다(타입이 겹침).
 * 이 것들이 'mock-socket'에 쓰여서 따로 정의했습니다.
 * */
type BinaryType = 'arraybuffer' | 'blob';

interface EventHandlerNonNull {
  (event: Event): any;
}

interface EventListenerOptions {
  capture?: boolean;
}

declare type EventListenerOrEventListenerObject =
  | EventListener
  | EventListenerObject;

interface EventListener {
  (evt: Event): void;
}

interface EventListenerObject {
  handleEvent(evt: Event): void;
}

interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
}
