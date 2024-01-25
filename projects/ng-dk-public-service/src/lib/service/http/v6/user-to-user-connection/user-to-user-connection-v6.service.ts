import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  UserToUserConnectionCollectionResponseV6,
  UserToUserConnectionResponseV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from './../../abstract-request-response-resource.service';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';
import { Observable } from 'rxjs';

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

  public confirmUserConnection(otherUserUuid: string, params?: {}): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.post<UserToUserConnectionResponseV6>(`${this.getBaseUri()}/${otherUserUuid}/confirm`, null, {
      params,
    });
  }

  public getConnectionDetailsByUuid(userAUuid: string, userBUuid: string): Observable<UserToUserConnectionResponseV6> {
    return this.httpClient.get<UserToUserConnectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userAUuid}/connections/${userBUuid}`
    );
  }
}
