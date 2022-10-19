import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractRequestResponseResourceService } from './../../abstract-request-response-resource.service';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';
import { UserProfileCreateRequestV6, UserProfileResponseV6 } from '@diamondkinetics/dk-public-dto-ts';

@Injectable({ providedIn: 'root' })
export class UserProfileServiceV6 extends AbstractRequestResponseResourceService<
  UserProfileCreateRequestV6,
  void,
  UserProfileResponseV6,
  void
> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.USER_PROFILE.getPath())
  }

}
