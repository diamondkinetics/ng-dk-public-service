import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwingScorePopulationCollectionResponseV6, SwingScorePopulationResponseV6 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class SwingScorePopulationV6Service extends AbstractRequestResponseResourceService<
  void,
  void,
  SwingScorePopulationResponseV6,
  SwingScorePopulationCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.SWING_SCORE_POPULATIONS.getPath());
  }
}
