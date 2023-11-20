import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PitchingSessionCollectionResponseV6, PitchingSessionResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class PitchingSessionV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  PitchingSessionResponseV6,
  PitchingSessionCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.PITCHING_SESSIONS.getPath());
  }
}
