import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserToUserConnectionCollectionResponseV6,
  UserToUserConnectionResponseV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';
import { AbstractRequestResponseResourceService } from './../../abstract-request-response-resource.service';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class UserToUserConnectionV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  UserToUserConnectionResponseV6,
  UserToUserConnectionCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.USER_CONNECTIONS.getPath());
  }

  public createUserConnection(otherUserUuid: string, params?: {}): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.post<UserToUserConnectionResponseV6>(`${this.getBaseUri()}/${otherUserUuid}`, null, {
      params,
    });
  }

  public createConnectionForUser(
    userUuid: string,
    otherUserUuid: string,
    params?: {}
  ): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.post<UserToUserConnectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userUuid}/${ResourceMapping.CONNECTIONS}/${otherUserUuid}`,
      null,
      { params }
    );
  }

  public confirmUserConnection(otherUserUuid: string, params?: {}): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.post<UserToUserConnectionResponseV6>(`${this.getBaseUri()}/${otherUserUuid}/confirm`, null, {
      params,
    });
  }

  public listForUser(
    userUuid: string,
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<UserToUserConnectionCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<UserToUserConnectionCollectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userUuid}/connections`,
      { params }
    );
  }

  public getConnectionDetailsByUuid(userAUuid: string, userBUuid: string): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.get<UserToUserConnectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userAUuid}/connections/${userBUuid}`
    );
  }

  public deleteConnectionForUser(userUuid: string, otherUserUuid: string): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.delete<UserToUserConnectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userUuid}/${ResourceMapping.CONNECTIONS}/${otherUserUuid}`
    );
  }
}
