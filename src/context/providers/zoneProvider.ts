import ZoneApi from 'src/api/zoneApi';
import { IProvider } from 'src/context/providers/chatProvider';
import { injectable } from 'inversify';

@injectable()
export default class ZoneProvider implements IProvider<ZoneApi> {
  private readonly zoneApi = new ZoneApi();

  provide(): ZoneApi {
    return this.zoneApi;
  }
}
