import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewSectionCollectionResponseV6, ViewSectionResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class ViewSectionV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  ViewSectionResponseV6,
  ViewSectionCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.VIEW_SECTIONS.getPath());
  }

  public getForActivityDefinition(
    activityDefinitionUuid: string,
    page = 0,
    size = 20,
    sortBy = 'serverCreated',
    sortDirection = 'desc',
    params = {}
  ): Observable<ViewSectionCollectionResponseV6> {
    const pagingParams = { page, size, sort: `${sortBy},${sortDirection}` };
    params = { ...params, ...pagingParams };

    return this.httpClient.get<ViewSectionCollectionResponseV6>(
      `/v${this.versionNumber}/${ResourceMapping.ACTIVITY_DEFINITIONS}/${activityDefinitionUuid}/${ResourceMapping.VIEW_SECTIONS}`,
      { params }
    );
  }
}
