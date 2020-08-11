import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CompetitionLevelDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractResourceService } from '../../abstract-resource.service';
import { ResourceMappings as route } from '../../../../enum/resource-mappings.enum';

@Injectable({ providedIn: 'root' })
export class CompetitionLevelServiceV2 extends AbstractResourceService<CompetitionLevelDTOV2> {

	constructor(protected http: HttpClient) {
		super(http, 2, route.COMPETITION_LEVELS.getPath);
	}

}
