import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AvatarCollectionResponseV6,
  BadgeCollectionResponseV6,
  CardDesignCollectionResponseV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class ItemV6Service {
  constructor(private httpClient: HttpClient) {}

  public getAllAvatars(page = 0, size = 20): Observable<AvatarCollectionResponseV6> {
    const params = { page, size };

    return this.httpClient.get<AvatarCollectionResponseV6>(`/v6/${ResourceMapping.AVATARS}`, { params });
  }

  public getAllBadges(
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<BadgeCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<BadgeCollectionResponseV6>(`/v6/${ResourceMapping.BADGES}`, {
      params,
    });
  }

  public getAllCardDesigns(
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<CardDesignCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<CardDesignCollectionResponseV6>(`/v6/${ResourceMapping.CARD_DESIGNS}`, {
      params,
    });
  }
}
