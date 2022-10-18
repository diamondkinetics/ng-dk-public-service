import { AccountGroupResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResourceMapping } from './../../../../enum/resource-mapping.enum';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';

@Injectable({ providedIn: 'root' })
export class AccountGroupServiceV6 extends AbstractRequestResponseResourceService<
  void,
  void,
  AccountGroupResponseV6,
  void
> {

  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.ACCOUNT_GROUPS.getPath());
  }

}
