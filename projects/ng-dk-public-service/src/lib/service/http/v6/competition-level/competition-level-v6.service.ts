import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { CompetitionLevelCollectionResponseV6, CompetitionLevelResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class CompetitionLevelV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  CompetitionLevelResponseV6,
  CompetitionLevelCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.COMPETITION_LEVELS.getPath());
  }
}
