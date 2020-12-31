import { AxiosInstance, AxiosResponse } from 'axios';
import createAxios from 'src/api/adapter/axiosFactory';
import Zone from 'src/model/zone';

export default class ZoneApi {
  private readonly httpClient: AxiosInstance;

  private static readonly HTTP_SERVER_BASE_URL = 'http://localhost:8080/';

  private static readonly RESOURCE = 'chat/rooms';

  constructor() {
    this.httpClient = createAxios({ baseURL: ZoneApi.HTTP_SERVER_BASE_URL });
  }

  public async getZones(): Promise<Zone[]> {
    const response: AxiosResponse = await this.httpClient.get(ZoneApi.RESOURCE);
    return response.data;
  }
}
