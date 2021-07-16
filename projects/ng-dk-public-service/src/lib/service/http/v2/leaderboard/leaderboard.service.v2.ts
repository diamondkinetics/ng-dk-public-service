import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeaderboardDTOV2, LeaderboardResultDTOV2 } from '@diamondkinetics/dk-public-dto-ts';
import { Observable } from 'rxjs';

import { AbstractResourceService } from '../../abstract-resource.service';
import { ResourceMapping as route } from '../../../../enum/resource-mapping.enum';

@Injectable({ providedIn: 'root' })
export class LeaderboardServiceV2 extends AbstractResourceService<LeaderboardDTOV2> {

	constructor(protected http: HttpClient) {
		super(http, 2, route.LEADERBOARDS.getPath)
	}

	public getForGroup(groupUuid: string): Observable<LeaderboardDTOV2> {
		return this.http.get<LeaderboardDTOV2>(
			`/${this.getVersionString()}/${route.GROUPS}/${groupUuid}/${route.LEADERBOARDS}`);
	}

	public getResults(uuid: string): Observable<LeaderboardResultDTOV2> {
		return this.http.get<LeaderboardResultDTOV2>(`/${this.getVersionString()}/${uuid}/results`);
	}

	public getResultsForUser(userUuid: string): Observable<LeaderboardResultDTOV2> {
		return this.http.get<LeaderboardResultDTOV2>(
			`/${this.getVersionString()}/${route.USERS}/${userUuid}/${route.LEADERBOARDS}`);
	}

}
