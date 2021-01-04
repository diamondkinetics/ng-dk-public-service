import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebHookDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';
import { AbstractResourceService } from '../../abstract-resource.service';

@Injectable({ providedIn: 'root' })
export class WebHookServiceV2 extends AbstractResourceService<WebHookDTOV2> {

	constructor(protected http: HttpClient) {
		super(http, 2, route.WEB_HOOKS.getPath);
	}

	public readForUser(userUuid: string): Observable<WebHookDTOV2[]> {
		return this.http.get<WebHookDTOV2[]>(`${this.getVersionString()}/${route.USERS}/${userUuid}/${route.WEB_HOOKS}`);
	}

	public createForUser(webHook: WebHookDTOV2, userUuid: string, testContext?: boolean): Observable<WebHookDTOV2> {
		const params = {
			testContext: String(testContext)
		};

		return this.http.post<WebHookDTOV2>(
			`${this.getVersionString()}/${route.USERS}/${userUuid}/${route.WEB_HOOKS}`,
			webHook,
			{ params });
	}

}
