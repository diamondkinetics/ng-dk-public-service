import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopulationDataDTOV3 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractResourceService } from './../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class PopulationDataServiceV3 extends AbstractResourceService<PopulationDataDTOV3> {

	constructor(protected http: HttpClient) {
		super(http, 3, route.POPULATION_DATA.getPath);
	}

}
