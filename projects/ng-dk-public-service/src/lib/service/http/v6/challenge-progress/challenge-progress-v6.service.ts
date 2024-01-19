import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ChallengeProgressCollectionResponseV6,
  ChallengeProgressCreateRequestV6,
  ChallengeProgressResponseV6,
  ChallengeProgressUpdateRequestV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class ChallengeProgressV6Service extends AbstractRequestResponseResourceService<
  ChallengeProgressCreateRequestV6,
  ChallengeProgressUpdateRequestV6,
  ChallengeProgressResponseV6,
  ChallengeProgressCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.CHALLENGE_PROGRESS.getPath());
  }

  public claimReward(
    updateRequest: ChallengeProgressUpdateRequestV6,
    uuid: string,
    params?: {}
  ): Observable<ChallengeProgressResponseV6> {
    return this.httpClient.post<ChallengeProgressResponseV6>(
      `/v${this.versionNumber}/${this.endpoint}/${uuid}`,
      updateRequest,
      { params }
    );
  }
}
