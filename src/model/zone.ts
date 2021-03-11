import ZoneId from 'src/model/zoneId';
import ZoneName from 'src/model/zoneName';
import Count from './count';

export default class Zone {
  private readonly _id: ZoneId;

  private readonly _name: ZoneName;

  private readonly _count: Count;

  get count(): Count {
    return this._count;
  }

  get id(): ZoneId {
    return this._id;
  }

  get name(): ZoneName {
    return this._name;
  }

  static of(id: string, name: string, count: number) {
    return new Zone(new ZoneId(id), new ZoneName(name), new Count(count));
  }

  constructor(id: ZoneId, name: ZoneName, count: Count) {
    this._id = id;
    this._name = name;
    this._count = count;
  }
}
