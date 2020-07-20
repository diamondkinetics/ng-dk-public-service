import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AbstractSensorSessionDTOV3, AbstractSensorEventDTOV3 } from '@diamondkinetics/dk-public-dto-ts';
import { AbstractSyncableDTOV2 } from '@diamondkinetics/dk-public-dto-ts';

import { ResourceMappings as route } from './../../enum/resource-mappings.enum';
import { AbstractResourceService } from './abstract-resource.service';

export abstract class AbstractSensorSessionService<
	EVENT extends AbstractSensorEventDTOV3,
	T extends AbstractSyncableDTOV2|AbstractSensorSessionDTOV3<EVENT>
> extends AbstractResourceService<T> {

		constructor(protected http: HttpClient, protected version: number, protected endpoint: string) {
			super(http, version, endpoint);
		}

		public createForSpecifiedUser(session: T, forUserUuid: string, groupUuid?: string, params?: {}): Observable<T> {
			if (groupUuid) {
				params = { ...params, groupUuid };
			}

			return this.http.post<T>(
				`/${this.getVersionString()}/${route.USERS}/${forUserUuid}/${this.endpoint}`,
				session,
				{ params });
		}

}
