import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  LevelDefinitionCollectionResponseV6,
  LevelStatusCollectionResponseV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class UserActivityV6Service {
  constructor(private httpClient: HttpClient) {}

  public listLevelDefinitions(
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<LevelDefinitionCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<LevelDefinitionCollectionResponseV6>(`/v6/${ResourceMapping.LEVEL_DEFINITIONS}`, {
      params,
    });
  }

  public listLevelStatuses(
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<LevelStatusCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<LevelStatusCollectionResponseV6>(`/v6/${ResourceMapping.LEVEL_STATUSES}`, { params });
  }
}
