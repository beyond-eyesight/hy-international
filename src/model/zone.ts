import ZoneId from 'src/model/zoneId';
import ZoneName from 'src/model/zoneName';
import Count from 'src/model/count';

export default class Zone {
  private readonly _id: ZoneId;

  private readonly _name: ZoneName;

  private readonly _count: Count;

  private readonly _isOpen: Boolean;

  get count(): Count {
    return this._count;
  }

  get id(): ZoneId {
    return this._id;
  }

  get name(): ZoneName {
    return this._name;
  }

  get isOpen(): Boolean {
    return this._isOpen;
  }

  static of(id: string, name: string, count: number, isOpen: Boolean) {
    return new Zone(
      new ZoneId(id),
      new ZoneName(name),
      new Count(count),
      isOpen
    );
  }

  constructor(id: ZoneId, name: ZoneName, count: Count, isOpen: Boolean) {
    this._id = id;
    this._name = name;
    this._count = count;
    this._isOpen = isOpen;
  }
}
