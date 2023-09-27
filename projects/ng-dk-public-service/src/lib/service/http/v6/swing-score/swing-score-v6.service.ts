import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractRequestResponseResourceService } from '../../abstract-request-response-resource.service';
import { ResourceMapping } from '../../../../enum/resource-mapping.enum';
import { SwingScoreCollectionResponseV6, SwingScoreResponseV6 } from '@diamondkinetics/dk-public-dto-ts';

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
}
