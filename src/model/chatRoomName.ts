export default class ChatRoomName {
  private readonly value: string;

  constructor(value: string) {
    // todo: validation logic
    this.value = value;
  }

  public toString = (): string => {
    return this.value;
  };
}
