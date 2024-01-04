import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChallengeCollectionResponseV6, ChallengeResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class ChallengeV6Service extends AbstractRequestResponseResourceService<void, void, ChallengeResponseV6, ChallengeCollectionResponseV6> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.CHALLENGES.getPath())
  }
}
