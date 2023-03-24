import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  UserProfileCollectionResponseV6,
  UserProfileCreateRequestV6,
  UserProfileResponseV6,
  UserProfileUpdateRequestV6
} from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';
import { AbstractRequestResponseResourceService } from './../../abstract-request-response-resource.service';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class UserProfileServiceV6 extends AbstractRequestResponseResourceService<
  UserProfileCreateRequestV6,
  UserProfileUpdateRequestV6,
  UserProfileResponseV6,
  UserProfileCollectionResponseV6
> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.USER_PROFILE.getPath())
  }

  public register(createRequest: UserProfileCreateRequestV6, params?: {}): Observable<UserProfileResponseV6> {
    return this.httpClient.post<UserProfileResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}`,
      createRequest, { params }
    );
  }

  public findUsers(q: string, params?: {}): Observable<UserProfileCollectionResponseV6> {
    const queryParams = params ? { ...params, q } : { q };

    return this.httpClient.get<UserProfileCollectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USER_PROFILE_SEARCH}`,
      { params: queryParams }
    );
  }

  public updateProfileImage(file: Blob, fileName: string): Observable<UserProfileResponseV6> {
		const formData = new FormData();
		formData.append('file', file, fileName);

    return this.httpClient.post<UserProfileResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USER_PROFILE_IMAGE}`,
      formData
    );
  }

  public updateProfile(updateRequest: UserProfileUpdateRequestV6): Observable<UserProfileResponseV6> {
    return this.httpClient.post<UserProfileResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USER_PROFILE}`,
      updateRequest
    );
  }
}
