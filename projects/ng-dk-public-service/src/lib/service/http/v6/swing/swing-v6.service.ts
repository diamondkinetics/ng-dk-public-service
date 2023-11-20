import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwingCollectionResponseV6, SwingResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SwingV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  SwingResponseV6,
  SwingCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.SWINGS.getPath());
  }

  public listForBattingSession(
    sessionUuid: string,
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<SwingCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<SwingCollectionResponseV6>(
      `/${this.versionNumber}/${ResourceMapping.BATTING_SESSIONS}/${sessionUuid}/${ResourceMapping.SWINGS}`,
      { params }
    );
  }
}
