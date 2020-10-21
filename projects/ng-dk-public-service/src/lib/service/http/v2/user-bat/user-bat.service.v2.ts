import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserBatDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { AbstractResourceService } from '../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class UserBatServiceV2 extends AbstractResourceService<UserBatDTOV2> {

	constructor(protected http: HttpClient) {
		super(http, 2, route.USER_BATS.getPath);
	}

}
