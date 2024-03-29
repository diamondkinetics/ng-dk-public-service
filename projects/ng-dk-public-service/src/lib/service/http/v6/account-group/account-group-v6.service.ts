import {
  AccountGroupDeepLinkCreateRequestV6,
  AccountGroupResponseV6,
  UserProfileCreateRequestNoCredentialsV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';

@Injectable({ providedIn: 'root' })
export class AccountGroupV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  AccountGroupResponseV6,
  void
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.ACCOUNT_GROUPS.getPath());
  }

  public addUserToAccountGroup(
    createRequest: UserProfileCreateRequestNoCredentialsV6
  ): Observable<AccountGroupResponseV6> {
    return this.httpClient.post<AccountGroupResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.ACCOUNT_GROUPS}`,
      createRequest
    );
  }

  public deleteAccountGroup(uuid: string): Observable<AccountGroupResponseV6> {
    return this.httpClient.delete<AccountGroupResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.ACCOUNT_GROUPS}/${uuid}`
    );
  }

  public setDeepLink(uuid: string, request: AccountGroupDeepLinkCreateRequestV6): Observable<AccountGroupResponseV6> {
    return this.httpClient.post<AccountGroupResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.ACCOUNT_GROUPS}/${uuid}/deepLink`,
      request
    );
  }

  public clearDeepLink(uuid: string): Observable<AccountGroupResponseV6> {
    return this.httpClient.delete<AccountGroupResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.ACCOUNT_GROUPS}/${uuid}/deepLink`
    );
  }
}
