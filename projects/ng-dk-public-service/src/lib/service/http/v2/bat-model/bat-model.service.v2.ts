import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BatModelDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractResourceService } from '../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class BatModelServiceV2 extends AbstractResourceService<BatModelDTOV2> {

	constructor(protected http: HttpClient) {
		super(http, 2, route.BAT_MODELS.getPath());
	}

}
