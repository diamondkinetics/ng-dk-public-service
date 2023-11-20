import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BattingSessionCollectionResponseV6, BattingSessionResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class BattingSessionV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  BattingSessionResponseV6,
  BattingSessionCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.BATTING_SESSIONS.getPath());
  }
}
