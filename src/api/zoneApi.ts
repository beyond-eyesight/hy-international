import { AxiosInstance, AxiosResponse } from 'axios';
import createAxios from 'src/api/adapter/axiosFactory';
import Zone from 'src/model/zone';

export default class ZoneApi {
  private readonly httpClient: AxiosInstance;

  private static readonly HTTP_SERVER_BASE_URL = 'http://localhost:8090/';

  private static readonly RESOURCE = 'zones';

  constructor() {
    this.httpClient = createAxios({ baseURL: ZoneApi.HTTP_SERVER_BASE_URL });
  }

  public async getZones(): Promise<Zone[]> {
    const response: AxiosResponse = await this.httpClient.get(ZoneApi.RESOURCE);

    // todo: refac - 깔끔하게 (dto도)
    return response.data.content.map((zoneDto: any, key: any) => {
      return Zone.of(zoneDto.id, zoneDto.name, 0, true);
    });
  }
}
