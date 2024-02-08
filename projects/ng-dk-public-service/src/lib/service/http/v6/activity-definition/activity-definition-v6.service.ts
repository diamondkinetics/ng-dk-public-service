import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivityDefinitionCollectionResponseV6,
  ActivityDefinitionCreateRequestV6,
  ActivityDefinitionResponseV6,
  ActivityDefinitionUpdateRequestV6,
} from '@diamondkinetics/dk-public-dto-ts';
import { AbstractRequestResponseResourceService } from './../../abstract-request-response-resource.service';
import { ResourceMapping } from './../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class ActivityDefinitionV6Service extends AbstractRequestResponseResourceService<
  ActivityDefinitionCreateRequestV6,
  ActivityDefinitionUpdateRequestV6,
  ActivityDefinitionResponseV6,
  ActivityDefinitionCollectionResponseV6
> {
  constructor(protected httpClient: HttpClient) {
    super(httpClient, 6, ResourceMapping.ACTIVITY_DEFINITIONS.getPath());
  }
}
