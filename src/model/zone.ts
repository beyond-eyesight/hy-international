import ZoneId from 'src/model/zoneId';
import ZoneName from 'src/model/zoneName';

export default class Zone {
  private readonly _id: ZoneId;

  private readonly _name: ZoneName;

  get id(): ZoneId {
    return this._id;
  }

  get name(): ZoneName {
    return this._name;
  }

  static of(id: string, name: string) {
    return new Zone(new ZoneId(id), new ZoneName(name));
  }

  constructor(id: ZoneId, name: ZoneName) {
    this._id = id;
    this._name = name;
  }
}
