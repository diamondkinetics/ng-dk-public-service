import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceMapping } from '../../enum/resource-mapping.enum';

export abstract class AbstractRequestResponseResourceService<
  CREATE_DTO,
  UPDATE_DTO,
  RESPONSE_DTO,
  COLLECTION_RESPONSE_DTO
> {
  constructor(protected httpClient: HttpClient, protected versionNumber: number, protected endpoint: string) {}

  public create(dto: CREATE_DTO, params?: {}): Observable<RESPONSE_DTO> {
    return this.httpClient.post<RESPONSE_DTO>(`${this.getBaseUri()}`, dto, { params });
  }

  public read(uuid: string, params?: {}): Observable<RESPONSE_DTO> {
    return this.httpClient.get<RESPONSE_DTO>(`${this.getBaseUri()}/${uuid}`, { params });
  }

  public readForLoggedInUser(params?: {}): Observable<RESPONSE_DTO> {
    return this.httpClient.get<RESPONSE_DTO>(`${this.getBaseUri()}`, { params });
  }

  public list(
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<COLLECTION_RESPONSE_DTO> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<COLLECTION_RESPONSE_DTO>(`${this.getBaseUri()}`, { params });
  }

  public listForUser(
    userUuid: string,
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<COLLECTION_RESPONSE_DTO> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<COLLECTION_RESPONSE_DTO>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userUuid}/${this.endpoint}`,
      { params }
    );
  }

  public update(dto: UPDATE_DTO, uuid: string, params?: {}): Observable<RESPONSE_DTO> {
    return this.httpClient.put<RESPONSE_DTO>(`${this.getBaseUri()}/${uuid}`, dto, { params });
  }

  public delete(uuid: string, params?: {}): Observable<RESPONSE_DTO> {
    return this.httpClient.delete<RESPONSE_DTO>(`${this.getBaseUri()}/${uuid}`, { params });
  }

  public getBaseUri(): string {
    return `/v${this.versionNumber}/${this.endpoint}`;
  }
}
