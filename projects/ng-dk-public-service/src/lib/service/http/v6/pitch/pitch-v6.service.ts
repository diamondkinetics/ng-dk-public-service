import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PitchCollectionResponseV6, PitchResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PitchV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  PitchResponseV6,
  PitchCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.SWINGS.getPath());
  }

  public listForPitchingSession(
    sessionUuid: string,
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<PitchCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<PitchCollectionResponseV6>(
      `/${this.versionNumber}/${ResourceMapping.PITCHING_SESSIONS}/${sessionUuid}/${ResourceMapping.PITCHES}`,
      { params }
    );
  }
}
