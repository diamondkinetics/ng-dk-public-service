import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SwingScoreAndStreakResponseV6,
  SwingScoreCollectionResponseV6,
  SwingScoreResponseV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class SwingScoreV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  SwingScoreResponseV6,
  SwingScoreCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.SWING_SCORES.getPath());
  }

  public getSwingScoreAndStreak(userUuid: string): Observable<SwingScoreAndStreakResponseV6> {
    return this.httpClient.get<SwingScoreAndStreakResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.USERS}/${userUuid}/swingPerformance`
    );
  }
}
